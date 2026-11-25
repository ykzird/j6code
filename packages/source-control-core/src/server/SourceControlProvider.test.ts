import { assert, it } from "@effect/vitest";

import {
  repositoryPathFromRemoteUrl,
  transportSafeSourceControlErrorValue,
} from "./SourceControlProvider.ts";

it("removes URL credentials, query parameters, and fragments from error transport values", () => {
  assert.strictEqual(
    transportSafeSourceControlErrorValue(
      "https://user:secret@example.test/org/repo/pull/42?token=secret#discussion",
    ),
    "https://example.test/org/repo/pull/42",
  );
});

it.each([
  ["git@github.com:T3Tools/j6code.git", "T3Tools/j6code"],
  ["github.com:T3Tools/j6code.git", "T3Tools/j6code"],
  ["gitlab.com:T3Tools/platform/j6code", "T3Tools/platform/j6code"],
  ["https://github.com/T3Tools/j6code.git", "T3Tools/j6code"],
  ["https://github.com/T3Tools/j6code.git?view=compact", "T3Tools/j6code"],
  ["https://github.com/T3Tools/j6code.git#section", "T3Tools/j6code"],
  ["C:/repos/j6code", null],
])("reads the repository path of %s", (remoteUrl, expected) => {
  assert.strictEqual(repositoryPathFromRemoteUrl(remoteUrl), expected);
});
