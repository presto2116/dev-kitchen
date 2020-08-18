/** @jsx jsx */
import {useState} from 'react';
import {jsx, Flex, Button} from 'theme-ui';
import ReactDiffViewer from 'react-diff-viewer';
import Prism from 'prismjs';
import '../css/prism-theme.css';
import CodeSnippet from '@components/CodeSnippet';

interface DiffSnippetProps {
  codeSnippet: string;
  prevCodeSnippet?: string;
  diffToggle?: boolean;
  showWordDiff?: boolean;
  splitView?: boolean;
  showDiffOnLoad: boolean;
}

const DiffSnippet = ({
  prevCodeSnippet,
  codeSnippet,
  diffToggle = true,
  showWordDiff,
  splitView = false,
  showDiffOnLoad,
}: DiffSnippetProps): JSX.Element => {
  const [highlightLines, setHightlightLines] = useState<string[]>(['']);
  const [showDiff, toggleDiff] = useState<boolean>(showDiffOnLoad);

  const syntaxHighlight = (str: string): JSX.Element | undefined => {
    if (!str) return;
    const language = Prism.highlight(str, Prism.languages.javascript, 'tsx');
    return <span dangerouslySetInnerHTML={{__html: language}} />;
  };

  const onLineNumberClick = (
    id: string,
    e: React.MouseEvent<HTMLTableCellElement>,
  ): void => {
    let lineIdAry = [id];
    if (e.shiftKey && highlightLines.length === 1) {
      const [dir, oldId] = highlightLines[0].split('-');
      const [newDir, newId] = id.split('-');
      if (dir === newDir) {
        lineIdAry = [];
        const lowEnd = Math.min(Number(oldId), Number(newId));
        const highEnd = Math.max(Number(oldId), Number(newId));
        for (let i = lowEnd; i <= highEnd; i++) {
          lineIdAry.push(`${dir}-${i}`);
        }
      }
    }
    setHightlightLines(lineIdAry);
  };
  return (
    <Flex sx={{flexDirection: 'column'}}>
      {diffToggle && (
        <Button
          variant={'toggle'}
          sx={{alignSelf: 'flex-end'}}
          onClick={() => toggleDiff(!showDiff)}
        >{`See ${showDiff ? 'File' : 'Diff'}  view`}</Button>
      )}
      {showDiff ? (
        <ReactDiffViewer
          oldValue={prevCodeSnippet}
          newValue={codeSnippet}
          useDarkTheme={true}
          onLineNumberClick={onLineNumberClick}
          highlightLines={highlightLines}
          splitView={splitView}
          disableWordDiff={!showWordDiff}
          renderContent={syntaxHighlight}
          styles={{
            variables: {
              dark: {
                gutterColor: '#FFFFFF',
                addedGutterColor: '#FFFFFF',
                removedGutterColor: '#Fefefe',
                emptyLineBackground: '#2e303c',
              },
            },
            diffContainer: {
              margin: '16px 0',
              padding: '10px',
            },
            contentText: {
              margin: 0,
              lineHeight: '1.25',
              fontSize: '16px',
            },
            line: {
              'td:first-of-type': {
                display: showDiff ? 'table-cell' : 'none',
              },
            },
          }}
        />
      ) : (
        <CodeSnippet showNumbers={true} code={codeSnippet} />
      )}
    </Flex>
  );
};

export default DiffSnippet;
