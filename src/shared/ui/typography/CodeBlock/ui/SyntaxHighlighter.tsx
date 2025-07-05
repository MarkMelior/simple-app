import { PrismLight } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import diff from 'react-syntax-highlighter/dist/esm/languages/prism/diff';
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';

import type { FC } from 'react';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';

PrismLight.registerLanguage('tsx', tsx);
PrismLight.registerLanguage('bash', bash);
PrismLight.registerLanguage('typescript', typescript);
PrismLight.registerLanguage('markdown', markdown);
PrismLight.registerLanguage('diff', diff);

export const SyntaxHighlighter: FC<SyntaxHighlighterProps> = ({
  children,
  className,
  codeTagProps,
  customStyle,
  language,
  showLineNumbers,
  style,
}) => (
  <PrismLight
    className={className}
    codeTagProps={codeTagProps}
    customStyle={customStyle}
    language={language}
    showLineNumbers={showLineNumbers}
    style={style}
  >
    {children}
  </PrismLight>
);
