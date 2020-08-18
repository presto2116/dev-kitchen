/** @jsx jsx */
import {jsx} from 'theme-ui';
import Layout from '@components/Layout';
import Meta from '@components/Meta';

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <Meta title="404: Not found" description="Page not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
