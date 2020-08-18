/** @jsx jsx */
import {jsx, Container, Heading, Text} from 'theme-ui';
import {Link} from 'gatsby';

import Layout from '@components/Layout';
import Meta from '@components/Meta';

import ImgSrc from '../images/dev-kitchen.jpg';

const IndexPage = (): JSX.Element => (
  <Layout>
    <Meta
      title="Home"
      description="Blog about all things dev"
      keywords={[`gatsby`, `HZ`, `react`]}
    />
    <Container variant="narrow">
      <Heading variant={'page'}>Hi people</Heading>
      <Text>Welcome to your new @hzdg kitchen.</Text>
      <ul sx={{variant: 'styles.ul'}}>
        <li>
          <Link to="/recipes/" sx={{variant: 'links.base'}}>
            Go to recipes
          </Link>
        </li>
        <li>
          <Link to="/kitchen/" sx={{variant: 'links.base'}}>
            Go to the kitchen
          </Link>
        </li>
      </ul>
      <img src={ImgSrc} alt="dev kitchen" sx={{maxWidth: 350, my: 3}} />
    </Container>
  </Layout>
);

export default IndexPage;
