/** @jsx jsx */
import {jsx, Heading, Text} from 'theme-ui';
import {Link} from 'gatsby';

import Layout from '@components/Layout';
import Meta from '@components/Meta';

const KitchenIndexPage = (): JSX.Element => (
  <Layout>
    <Meta
      title="Kitchen"
      description=" Enjoy an interactive kitchen where you can test out your recipes."
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Heading variant={'page'}>Hi people</Heading>
    <img
      src={'https://media.giphy.com/media/3ohze1W9gqYUDx7l2U/source.gif'}
      alt="kitchen"
      sx={{maxWidth: '300px', display: 'block'}}
    />
    <Heading variant={'section'} mb={1}>
      Kitchen
    </Heading>
    <Text mb={3}>
      Enjoy an interactive kitchen where you can test out your recipes.
    </Text>

    <ul sx={{variant: 'styles.ul'}}>
      <li>
        <Link to="/kitchen/use-size/" sx={{variant: 'links.base'}}>
          Basic Use Size
        </Link>
      </li>
      <li>
        <Link to="/kitchen/messing-with-widths/" sx={{variant: 'links.base'}}>
          Messing with Widths
        </Link>
      </li>
      <li>
        <Link to="/kitchen/grid-cards/" sx={{variant: 'links.base'}}>
          Grid Cards
        </Link>
      </li>
      <li>
        <Link to="/kitchen/nav/" sx={{variant: 'links.base'}}>
          Nav
        </Link>
      </li>
    </ul>
  </Layout>
);

export default KitchenIndexPage;
