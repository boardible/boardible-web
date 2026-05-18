export const siteUrl = "https://www.boardible.com";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}