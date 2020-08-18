/** @jsx jsx */
import {jsx, Heading, Flex, Link, Box} from 'theme-ui';
import {useState} from 'react';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple';
import {useLocation} from '@reach/router';

import ToggleButtonGroup from '@components/ToggleButtonGroup';
import Layout from '@components/Layout';
import Meta from '@components/Meta';
import PageHeading from '@components/PageHeading';

interface KitchenTemplateProps {
  codeSnippet: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scope: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontmatter?: any;
}

const KitchenTemplate = ({
  codeSnippet,
  scope,
  frontmatter,
}: KitchenTemplateProps): JSX.Element => {
  const {pathname} = useLocation();

  const [activeTab, setActiveTab] = useState<string>('Editor');

  return (
    <Layout>
      <Meta title={frontmatter.title} description={frontmatter.description} />
      <PageHeading frontmatter={frontmatter} />
      <ToggleButtonGroup
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        buttons={['Editor', 'Preview']}
      />
      <LiveProvider
        code={codeSnippet}
        scope={scope}
        noInline={true}
        theme={shadesOfPurple}
      >
        <Box sx={{display: activeTab === 'Preview' ? 'block' : 'none'}}>
          <Heading sx={{variant: 'text.page', display: 'inline-block', mb: 3}}>
            Preview
          </Heading>
          <LivePreview />
        </Box>
        <Box sx={{display: activeTab === 'Editor' ? 'block' : 'none'}}>
          <Flex
            sx={{justifyContent: 'space-between', alignItems: 'flex-start'}}
          >
            <Heading variant={'page'} mb={3}>
              Editable code
            </Heading>
            {/* TODO: make this not a full page refresh. just revert code snippet */}
            <Link variant={'nav'} href={pathname}>
              Revert Changes
            </Link>
          </Flex>
          <LiveError />
          <Box sx={{maxHeight: 600, overflow: 'scroll', mb: 3}}>
            <LiveEditor sx={{fontSize: 2}} />
          </Box>
        </Box>
      </LiveProvider>
    </Layout>
  );
};

export default KitchenTemplate;
