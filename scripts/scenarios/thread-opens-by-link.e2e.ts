import { expect } from "e2e";

import { test, WEB } from "./j6.ts";

test(
  "A seeded thread opens by its link and shows its history",
  WEB,
  async ({ j6, app, screen }) => {
    const project = await j6.project("demo");
    const thread = await j6.thread({
      project,
      title: "Earlier work",
      messages: ["first", "second"],
    });
    await j6.open(thread);

    await expect(screen.getByText("second fixture turn complete", { exact: false })).toBeVisible();
    await app.screenshot("thread");
  },
);
