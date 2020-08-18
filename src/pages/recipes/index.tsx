/** @jsx jsx */
import {jsx, Heading} from 'theme-ui';
import {Link} from 'gatsby';

import Layout from '@components/Layout';
import Meta from '@components/Meta';

const BlogIndexPage = (): JSX.Element => (
  <Layout>
    <Meta
      title="Home"
      description="A shiny new Gatsby Site!"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Heading variant={'page'}>Hi people</Heading>
    <img
      src={'https://media.giphy.com/media/3ohze1W9gqYUDx7l2U/source.gif'}
      alt="recipes"
      sx={{maxWidth: '300px', display: 'block'}}
    />
    <Heading variant={'section'}>Recipes</Heading>

    <ul sx={{variant: 'styles.ul'}}>
      <li>
        <Link to="/recipes/use-size/" sx={{variant: 'links.recipe'}}>
          Basic Use Size
        </Link>
      </li>
      <li>
        <Link to="/recipes/messing-with-widths/" sx={{variant: 'links.recipe'}}>
          Messing with Widths
        </Link>
      </li>
      <li>
        <Link to="/recipes/grid-cards/" sx={{variant: 'links.recipe'}}>
          Grid Cards
        </Link>
      </li>
      <li>
        <Link to="/recipes/nav/" sx={{variant: 'links.recipe'}}>
          Nav
        </Link>
      </li>
    </ul>
  </Layout>
);

export default BlogIndexPage;
