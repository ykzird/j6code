import {
  normalizeMarkdownLinkDestination,
  splitMarkdownLinkSearchAndHash,
} from "@j6/shared/markdownLinks";

export {
  classifyMarkdownImageSource,
  type MarkdownImageSource,
} from "@j6/shared/markdownLinks";

export function markdownImageSourceFragment(source: string): string {
  return splitMarkdownLinkSearchAndHash(normalizeMarkdownLinkDestination(source)).hash;
}
