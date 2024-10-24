import ReactMarkdown from 'react-markdown';
import gmf from 'remark-gfm';

import { markdownComponents } from '../utils/markdownComponents';

export default function MarkdownParser({ content }: { content: string }) {
  return (
    <ReactMarkdown components={markdownComponents} remarkPlugins={[gmf]}>
      {content}
    </ReactMarkdown>
  );
}
