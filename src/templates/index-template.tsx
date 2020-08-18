/** @jsx jsx */
import {jsx, Container} from 'theme-ui';
import {Link} from 'gatsby';
import {useLocation} from '@reach/router';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';

import {ArrowSvg} from '@components/Icons';
import Layout from '@components/Layout';
import Meta from '@components/Meta';
import MdxFactory from '@components/MdxFactory';
import PageHeading from '@components/PageHeading';

// TODO: Update if fields don't need to be required
// TODO: Find me a home
interface RecipeIndexProps {
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
  };
}

const RecipeIndexTemplate = ({pageContext}: RecipeIndexProps): JSX.Element => {
  const {pathname} = useLocation();
  const {frontmatter, body} = pageContext;
  const mdxComponents = MdxFactory({isText: true, activeTab: true});
  return (
    <Layout>
      <Meta
        title={frontmatter?.title}
        description={frontmatter?.description}
        author={frontmatter?.author}
        keywords={frontmatter.keywords}
      />
      <Container variant="narrow">
        <PageHeading frontmatter={frontmatter} />
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        <Link
          to={`${pathname}step-1/`}
          sx={{
            variant: 'links.nav',
            display: 'inline-block',
            bg: 'orange',
            py: 2,
            px: 4,
            mt: 3,
            mb: 4,
            '&:hover': {bg: 'orange'},
          }}
        >
          <span sx={{mr: 2}}>Step 1</span> <ArrowSvg />
        </Link>
      </Container>
    </Layout>
  );
};

export default RecipeIndexTemplate;
