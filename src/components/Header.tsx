/** @jsx jsx */
import {jsx, Box, Flex, Container} from 'theme-ui';
import {Link} from 'gatsby';
import {H} from '@hzdg/sectioning';
import {Logo} from '@components/Icons';

interface HeaderProps {
  siteTitle?: string;
}

const Header = ({siteTitle = ''}: HeaderProps): JSX.Element => {
  return (
    <Box
      sx={{
        bg: 'orange',
        color: 'white',
        py: 2,
      }}
    >
      <Container>
        <Flex sx={{alignItems: 'center'}}>
          <Link
            to="/"
            sx={{
              variant: 'links.logo',
              justifyContent: 'flex-start',
              display: 'inline-flex',
              px: 0,
            }}
          >
            <Logo />
            <H
              sx={{
                ml: 4,
                color: `white`,
                fontSize: 5,
                whiteSpace: 'nowrap',
              }}
            >
              {siteTitle}
            </H>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
