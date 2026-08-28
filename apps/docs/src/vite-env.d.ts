declare module "*?highlighted" {
  const html: string;
  export default html;
}

declare module "virtual:highlighted-inline" {
  interface InlineEntry {
    importHtml?: string;
    codeHtml?: string;
    install: Record<string, string>;
  }
  const data: Record<string, InlineEntry>;
  export default data;
}
