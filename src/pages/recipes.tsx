/** @jsx jsx */
import {jsx, Heading, Container} from 'theme-ui';

import Layout from '@components/Layout';
import Meta from '@components/Meta';
import RecipeList from '@components/RecipeList';

const RecipeIndexPage = (): JSX.Element => (
  <Layout>
    <Meta
      title="Home"
      description="A shiny new Gatsby Site!"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Container variant="narrow">
      <Heading variant={'section'}>Recipes</Heading>
      <RecipeList />
    </Container>
  </Layout>
);

export default RecipeIndexPage;
