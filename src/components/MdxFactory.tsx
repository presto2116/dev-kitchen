/** @jsx jsx */
import {jsx, Container, Box, Styled} from 'theme-ui';
import {Link} from 'gatsby';
import DiffSnippet from '@components/DiffSnippet';
import CodeSnippet from '@components/CodeSnippet';

interface MdxProps {
  children: string;
}
interface CodeSnippetProps {
  code: string;
}
interface DiffSnippetProps {
  codeSnippet: string;
  prevCodeSnippet: string;
  showDiffOnLoad: boolean;
  diffToggle: boolean;
}

const RenderCode = ({Code}) => {
  return (
    Code && (
      <Box mt={5}>
        <Code />
      </Box>
    )
  );
};

const MdxFactory = ({isText, activeTab}): JSX.Element | null => {
  return {
    CodeSnippet: function codeSnippetBuilder({code}: CodeSnippetProps) {
      return isText ? (
        <Container sx={{variant: 'layout.narrow', mb: 3}}>
          <CodeSnippet code={code} />
        </Container>
      ) : null;
    },
    Link: function linkBuilder({to, children}) {
      return isText ? (
        <Container sx={{variant: 'layout.narrow', mb: 3}}>
          <Link to={to} sx={{color: 'text'}}>
            {children}
          </Link>
        </Container>
      ) : null;
    },
    DiffSnippet: function codeSnippetBuilder({
      codeSnippet,
      prevCodeSnippet,
      showDiffOnLoad,
      diffToggle = false,
    }: DiffSnippetProps) {
      return isText ? (
        <Container variant="narrow">
          <DiffSnippet
            codeSnippet={codeSnippet}
            prevCodeSnippet={prevCodeSnippet}
            showDiffOnLoad={showDiffOnLoad}
            diffToggle={diffToggle}
          />
        </Container>
      ) : null;
    },
    h1: function h1Builder({children}: MdxProps) {
      return isText ? (
        <Styled.h1 sx={{variant: 'layout.narrow', mt: 1}}>{children}</Styled.h1>
      ) : null;
    },
    h2: function h2Builder({children}: MdxProps) {
      return isText ? (
        <Styled.h2 sx={{variant: 'layout.narrow', mt: 1}}>{children}</Styled.h2>
      ) : null;
    },
    h3: function h3Builder({children}: MdxProps) {
      return isText ? (
        <Styled.h3 sx={{variant: 'layout.narrow', mt: 1}}>{children}</Styled.h3>
      ) : null;
    },
    h4: function h4Builder({children}: MdxProps) {
      return isText ? (
        <Styled.h4 sx={{variant: 'layout.narrow', mt: 1}}>{children}</Styled.h4>
      ) : null;
    },
    h5: function h5Builder({children}: MdxProps) {
      return isText ? (
        <Styled.h5 sx={{variant: 'layout.narrow', mt: 1}}>{children}</Styled.h5>
      ) : null;
    },
    p: function h1Builder({children}: MdxProps) {
      return isText ? (
        <Styled.p sx={{variant: 'layout.narrow'}}>{children}</Styled.p>
      ) : null;
    },
    RenderCode: function codeBuilder({Code}) {
      return activeTab === 'Result' ? <RenderCode Code={Code} /> : null;
    },
  };
};

export default MdxFactory;
