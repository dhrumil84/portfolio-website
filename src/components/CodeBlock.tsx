// src/components/CodeBlock.tsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeOutput } from '@/types/notebook';

interface CodeBlockProps {
  code: string;
  language?: string;
  outputs?: CodeOutput[];
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python', outputs = [] }) => {
  return (
    <div className="my-4">
      <SyntaxHighlighter 
        language={language} 
        style={vscDarkPlus}
        className="rounded-md"
      >
        {code}
      </SyntaxHighlighter>
      
      {outputs.length > 0 && (
        <div className="mt-2 p-3 bg-gray-100 rounded-md">
          {outputs.map((output, index) => (
            <div key={index} className="output">
              {output.text && output.text.map((line, i) => (
                <pre key={i} className="text-sm">{line}</pre>
              ))}
              {output.html && (
                <div dangerouslySetInnerHTML={{ __html: output.html.join('') }} />
              )}
              {output.image && (
                <img 
                  src={`data:image/png;base64,${output.image}`} 
                  alt="Output visualization" 
                  className="max-w-full h-auto"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;