/// <reference lib="dom" />
import { expect } from "e2e";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";

import { run } from "./shell.ts";
import { runPromise, test, WEB } from "./j6.ts";

test(
  "A failed commit message stays in the repository it was written for",
  WEB,
  async ({ j6, app, browser, screen }) => {
    const first = await j6.project("first-repository");
    const second = await j6.project("second-repository");
    const firstThread = await j6.thread({
      project: first,
      title: "First checkout",
      messages: ["First"],
    });
    await j6.thread({ project: second, title: "Second checkout", messages: ["Second"] });

    await runPromise(
      Effect.gen(function* () {
        const fs = yield* FileSystem.FileSystem;
        const hook = `${first}/.git/hooks/pre-commit`;
        yield* fs.writeFileString(
          hook,
          "#!/bin/sh\necho 'Scenario hook rejected the commit' >&2\nexit 1\n",
        );
        yield* fs.chmod(hook, 0o755);
        yield* run("git", ["config", "core.hooksPath", ".git/hooks"], { cwd: first });
        yield* run("git", ["config", "user.name", "Scenario"], { cwd: first });
        yield* run("git", ["config", "user.email", "scenario@example.invalid"], { cwd: first });
        yield* fs.writeFileString(`${first}/first.txt`, "A new change in the first repository\n");
        yield* fs.writeFileString(
          `${second}/second.txt`,
          "A new change in the second repository\n",
        );
      }),
    );

    await browser.setViewport({ width: 1920, height: 1000 });
    await j6.open(firstThread);
    const openCommit = async (file: string) => {
      await screen.getByRole("button", "Git action options").tap();
      await screen.getByRole("menuitem", "Commit", { exact: true }).tap();
      await screen.getByRole("button", `Open ${file} in editor`, { exact: true }).waitFor();
    };
    await openCommit("first.txt");
    await screen
      .getByPlaceholder("Leave empty to auto-generate")
      .fill("Describe the first checkout");
    await screen.getByRole("button", "Commit", { exact: true }).tap();
    await screen.getByText("Action failed", { exact: true }).waitFor();

    // Navigate in the running app so the shared thread view stays mounted.
    await screen.getByRole("button", /^Second checkout(?:,|$)/).tap();
    await openCommit("second.txt");
    await app.screenshot("commit-message-in-second-repository");
    const message = await browser.evaluate(
      () =>
        "" +
        document.querySelector<HTMLTextAreaElement>(
          'textarea[placeholder="Leave empty to auto-generate"]',
        )?.value,
    );
    expect(message, "The second repository starts with a blank commit message").toBe("");
  },
);
