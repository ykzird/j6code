import { expect } from "e2e";

import { test, WEB } from "./j6.ts";

const FILE = "handoff.txt";

test(
  "A bare citation leaves the file unresolved when other projects contain several matches",
  WEB,
  async ({ j6, app, browser, screen }) => {
    const project = await j6.project("planning");
    await j6.project("reports", { "notes/HANDOFF.txt": "Report handoff" });
    await j6.project("support", {
      "current/Handoff.txt": "Current support handoff",
      "archive/HANDOFF.txt": "Archived support handoff",
    });
    const thread = await j6.thread({
      project,
      title: "Find the handoff",
      messages: [`See :codex-file-citation{path="${FILE}" line_range_start="1"}`],
    });

    await j6.open(thread);
    await screen.getByRole("button", /^Agent See/).tap();
    await screen.getByRole("link", /^handoff\.txt/).tap();

    try {
      await expect(
        browser
          .locator("[data-right-panel-surface-content]")
          .getByText("The file could not be accessed or read. It may be missing or inaccessible."),
      ).toBeVisible();
    } finally {
      await app.screenshot("ambiguous-handoff-citation");
    }
  },
);
