import Url from "url-parse";

export function stripUrl(url: string): string {
  const urlObject = new Url(url);
  return urlObject.host;
}
