import { expect } from "e2e";

import { test, WEB } from "./j6.ts";

test(
  "Thread search finds a curly apostrophe next to a two-character Chinese word",
  WEB,
  async ({ j6, app, screen }) => {
    const project = await j6.project("demo");
    const thread = await j6.thread({ project, title: "Weekly notes", messages: ["Start"] });
    await j6.open(thread);

    // Search reads what the user wrote; messages the CLI sends count as an agent's.
    const composer = screen.getByRole("textbox");
    await composer.pressSequentially("部署 John’s service after migration");
    await composer.press("Enter");
    await expect(screen.getByText("second fixture turn complete", { exact: false })).toBeVisible();

    await screen.getByRole("combobox", "Search threads").fill("部署 John’s");
    await expect(screen.getByRole("listbox", "Thread search results")).toContainText(
      "John’s service",
    );
    await app.screenshot("search");
  },
);
