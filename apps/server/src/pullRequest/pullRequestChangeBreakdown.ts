import type { PullRequestChangeBreakdown } from "@j6/contracts";
import { summarizeChangedFiles } from "@j6/shared/changedFileKind";
import type { ProviderFileStats } from "@j6/source-control-core/server/PullRequestProvider";

export function toChangeBreakdown(stats: ProviderFileStats): PullRequestChangeBreakdown {
  if (stats.truncated) return null;
  return summarizeChangedFiles(stats.files);
}
