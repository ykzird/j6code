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
  ["git@github.com:J6Tools/j6code.git", "J6Tools/j6code"],
  ["github.com:J6Tools/j6code.git", "J6Tools/j6code"],
  ["gitlab.com:J6Tools/platform/j6code", "J6Tools/platform/j6code"],
  ["https://github.com/J6Tools/j6code.git", "J6Tools/j6code"],
  ["https://github.com/J6Tools/j6code.git?view=compact", "J6Tools/j6code"],
  ["https://github.com/J6Tools/j6code.git#section", "J6Tools/j6code"],
  ["C:/repos/j6code", null],
])("reads the repository path of %s", (remoteUrl, expected) => {
  assert.strictEqual(repositoryPathFromRemoteUrl(remoteUrl), expected);
});
