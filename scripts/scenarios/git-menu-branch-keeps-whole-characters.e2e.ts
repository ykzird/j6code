import { expect } from "e2e";

import { run } from "./shell.ts";
import { runPromise } from "./j6.ts";
import { IOS, test } from "./j6-mobile.ts";

// The Git menu shows 12 units, "…" and the last 11; each emoji straddles one cut.
const BRANCH = "feature/abc😀-long-branch-name-😀-for-menus";

test(
  "The Git menu's branch title keeps whole characters at both cuts",
  IOS,
  async ({ j6, app, screen }) => {
    const project = await j6.project("demo");
    await runPromise(run("git", ["checkout", "--quiet", "-b", BRANCH], { cwd: project }));
    await j6.thread({ project, title: "Branch work", messages: ["first"] });
    // A local simulator keeps the last run's pairing.
    await app.clearState().catch(() => {});
    await j6.open();

    await screen.getByText("Branch work", { exact: false }).first().tap({ timeout: 120_000 });
    await screen.getByRole("button", "Git controls").tap({ timeout: 60_000 });
    const title = screen.getByText("feature/abc", { exact: false }).first();
    await title.waitFor({ timeout: 30_000 });
    await app.screenshot("git-menu");
    await expect(title).toHaveText("feature/abc…-for-menus, Clean");
  },
);
