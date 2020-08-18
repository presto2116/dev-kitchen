/** @jsx jsx */
import {jsx, ThemeProvider, Flex, Container, Box} from 'theme-ui';
import {ReactNode} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Header from '@components/Header';
import theme from '../gatsby-plugin-theme-ui/index';

import BreadCrumbs from '@components/BreadCrumbs';

interface LayoutProps {
  children: ReactNode;
}

const SITE_TITLE_QUERY = graphql`
  query SiteTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({children}: LayoutProps): JSX.Element => {
  const {site} = useStaticQuery(SITE_TITLE_QUERY);

  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header siteTitle={site.siteMetadata.title} />
        <Container sx={{flex: '1 1 auto'}}>
          <BreadCrumbs />
          {children && children}
        </Container>
        <Box as="footer" sx={{bg: 'boulder', color: 'white', p: 4}}>
          © {new Date().getFullYear()}, Built with{` `}
          <a sx={{color: 'white'}} href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </Box>
      </Flex>
    </ThemeProvider>
  );
};
export default Layout;
