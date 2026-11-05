import { CopyButton } from '@/components/blog/copy-button';
import { stegaClean } from 'next-sanity';
import { FiFileText } from 'react-icons/fi';
import { highlight } from 'sugar-high';
import { lang } from 'sugar-high/lang';

export type CodeValue = {
  code?: string;
  filename?: string;
  language?: string;
  /** 1-based line numbers, toggled by clicking line numbers in the Studio's code input. */
  highlightedLines?: number[];
};

// Names for the Studio's language values, shown when a block has no filename.
const LANGUAGE_LABELS: Record<string, string> = {
  typescript: 'TypeScript',
  tsx: 'TSX',
  javascript: 'JavaScript',
  jsx: 'JSX',
  json: 'JSON',
  html: 'HTML',
  css: 'CSS',
  sh: 'Shell',
  python: 'Python',
  sql: 'SQL',
  yaml: 'YAML',
  markdown: 'Markdown',
};

/**
 * A Portable Text code block: highlighted on the server with sugar-high, colors from the
 * `--sh-*` variables in globals.css. `data-slot` opts it out of Typeset's styles.
 */
export function CodeBlock({ value }: { value: CodeValue }) {
  if (!value.code) return null;
  const code = stegaClean(value.code);
  const language = stegaClean(value.language);
  const filename = stegaClean(value.filename);
  const highlighted = new Set(value.highlightedLines ?? []);
  const html = highlight(code, {
    // Studio values like `sh` or `tsx` map to sugar-high's names; unknown ones fall back to JS.
    lang: language ? lang(language) : undefined,
    // sugar-high counts lines from 0; the Studio counts from 1.
    markLine(line) {
      if (highlighted.has(line.index + 1)) line.className += ' sh__line--highlighted';
    },
  });

  return (
    <figure
      data-slot="code-block"
      className="overflow-hidden rounded-xl bg-background shadow-[0_2px_0_0_var(--color-border)] ring-1 ring-border dark:bg-gray-950/60"
    >
      <figcaption className="flex items-center gap-3 px-3 pt-3">
        {filename ? (
          <span className="inline-flex min-w-0 items-center gap-2 rounded-lg px-2.5 py-1 font-mono text-[0.8125rem] text-foreground ring-1 ring-border">
            <FiFileText aria-hidden="true" className="shrink-0 text-muted-foreground" />
            <span className="truncate">{filename}</span>
          </span>
        ) : (
          language && (
            <span className="pl-2 text-[0.8125rem] font-medium text-muted-foreground">
              {LANGUAGE_LABELS[language] ?? language}
            </span>
          )
        )}
        <CopyButton code={code} />
      </figcaption>
      <pre
        data-language={language}
        className="overflow-x-auto px-5 pt-4 pb-5 font-mono text-[0.875rem] leading-relaxed [tab-size:2]"
      >
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </figure>
  );
}
