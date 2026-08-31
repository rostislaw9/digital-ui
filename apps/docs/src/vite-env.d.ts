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

declare module "virtual:highlighted-sources-map" {
  interface SourceFile {
    filename: string;
    html: string;
    rawCode: string;
  }
  interface SourceEntry {
    sourceFiles: SourceFile[];
    depInstall: Record<string, string>;
  }
  type SourceLoader = () => Promise<{ default: SourceEntry }>;
  const data: Record<string, SourceLoader>;
  export default data;
}

declare module "virtual:highlighted-source/*" {
  interface SourceFile {
    filename: string;
    html: string;
    rawCode: string;
  }
  interface SourceEntry {
    sourceFiles: SourceFile[];
    depInstall: Record<string, string>;
  }
  const data: SourceEntry;
  export default data;
}
