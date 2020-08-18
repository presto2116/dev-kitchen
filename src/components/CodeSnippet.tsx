/** @jsx jsx */
import {jsx} from 'theme-ui';

import Highlight, {defaultProps} from 'prism-react-renderer';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
export const rowRange = (start: number, end: number): number[] =>
  Array.from(Array(Math.abs(end - start) + 1), (_, i) => start + i);

interface CodeSnippetProps {
  code: string;
  showNumbers?: boolean;
}

const CodeSnippet = ({
  code,
  showNumbers = false,
}: CodeSnippetProps): JSX.Element => {
  return (
    <Highlight
      {...defaultProps}
      code={code.trim()}
      language="jsx"
      theme={shadesOfPurple}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => {
        return (
          <pre
            style={style}
            sx={{
              textAlign: 'left',
              margin: '16px 0 !important',
              padding: '10px !important',
              overflow: 'scroll',
            }}
            className={className}
          >
            {tokens.map((line, i) => {
              return (
                <div
                  key={i}
                  {...getLineProps({line, key: i})}
                  sx={{
                    display: 'table-row',
                  }}
                >
                  {showNumbers && (
                    <span
                      sx={{
                        display: 'table-cell',
                        textAlign: 'right',
                        px: 2,
                        userSelect: 'none',
                        fontSize: [1, null, 2],
                        borderRight: '1px solid rgba(255, 255, 255, .5)',
                      }}
                    >
                      {i + 1}
                    </span>
                  )}
                  <span
                    sx={{
                      display: 'table-cell',
                      fontSize: [1, null, 2],
                      pl: 3,
                      width: '100%',
                    }}
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({token, key})} />
                    ))}
                  </span>
                </div>
              );
            })}
          </pre>
        );
      }}
    </Highlight>
  );
};

export default CodeSnippet;
