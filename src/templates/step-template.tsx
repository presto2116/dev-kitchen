/** @jsx jsx */
import {jsx, Container, Box} from 'theme-ui';
import {useState, useMemo} from 'react';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';

import Layout from '@components/Layout';
import Meta from '@components/Meta';
import PageHeading from '@components/PageHeading';
import MdxFactory from '@components/MdxFactory';
import StepLinks from '@components/StepLinks';
import ToggleButtonGroup from '@components/ToggleButtonGroup';
import DiffSnippet from '@components/DiffSnippet';

interface StepTemplateProps {
  pageContext: {
    frontmatter: {
      title: string;
      subtitle: string;
      description: string;
      author: string;
      authorGithub: string;
      written: string;
      hzCoreComponent: string;
      hzCoreLink: string;
      keywords: string[];
      path: string;
      prevPath: string;
      showDiffOnLoad: boolean;
      splitView: boolean;
    };
    body: string;
    codeSnippet: string;
    prevCodeSnippet?: string;
  };
}

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

const StepTemplate = ({pageContext}: StepTemplateProps): JSX.Element => {
  const {frontmatter, codeSnippet, prevCodeSnippet, body} = pageContext;
  const [activeTab, setActiveTab] = useState<string>('Text');
  const isText = useMemo(() => activeTab === 'Text', [activeTab]);
  const mdxComponents = MdxFactory({isText, activeTab});

  return (
    <Layout>
      <Meta
        title={`${frontmatter.subtitle} | ${frontmatter.title}`}
        description={frontmatter.description}
        author={frontmatter?.author}
        keywords={frontmatter.keywords}
      />
      <Box mb={5}>
        <Container variant="narrow">
          <PageHeading frontmatter={frontmatter} />
          <StepLinks />
          <ToggleButtonGroup
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            buttons={['Text', 'Code', 'Result']}
          />
        </Container>
        <Box>
          <MDXProvider components={mdxComponents}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </Box>
        {codeSnippet && activeTab === 'Code' && (
          <Box mt={3}>
            <DiffSnippet
              prevCodeSnippet={prevCodeSnippet ?? codeSnippet}
              diffToggle={typeof prevCodeSnippet === 'string'}
              codeSnippet={codeSnippet}
              splitView={frontmatter.splitView}
              showWordDiff={false}
              showDiffOnLoad={frontmatter.showDiffOnLoad}
            />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default StepTemplate;
