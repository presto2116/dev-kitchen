/** @jsx jsx */
import {jsx, Container, Heading, Text} from 'theme-ui';
import {Link} from 'gatsby';

import Layout from '@components/Layout';
import Image from '@components/Image';
import Meta from '@components/Meta';

const IndexPage = (): JSX.Element => (
  <Layout>
    <Meta
      title="Home"
      description="Blog about all things dev"
      keywords={[`gatsby`, `HZ`, `react`]}
    />
    <Container variant="narrow">
      <Heading variant={'page'}>Hi people</Heading>
      <Text>Welcome to your new @hzdg recipe blog.</Text>
      <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        <Image />
      </div>
      <ul sx={{variant: 'styles.ul'}}>
        <li>
          <Link to="/blog/" sx={{variant: 'links.recipe'}}>
            Go to blog
          </Link>
        </li>
        <li>
          <Link to="/recipes/" sx={{variant: 'links.recipe'}}>
            Go to recipes
          </Link>
        </li>
      </ul>
    </Container>
  </Layout>
);

export default IndexPage;
