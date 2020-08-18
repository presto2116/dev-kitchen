/** @jsx jsx */
import {jsx, Heading, Container} from 'theme-ui';

import Layout from '@components/Layout';
import Meta from '@components/Meta';
import BlogList from '@components/BlogList';

const BlogIndexPage = (): JSX.Element => (
  <Layout>
    <Meta
      title="Home"
      description="A shiny new Gatsby Site!"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Container variant="narrow">
      <Heading variant={'page'}>Hi people</Heading>
      <img
        src={'https://media.giphy.com/media/Ws4mczhTK8yXcVUiFK/giphy.gif'}
        alt="blog"
        sx={{maxWidth: '300px', display: 'block'}}
      />
      <Heading variant={'section'}>Blog Posts</Heading>
      <BlogList />
    </Container>
  </Layout>
);

export default BlogIndexPage;
