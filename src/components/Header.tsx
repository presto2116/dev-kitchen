/** @jsx jsx */
import {jsx, Box, Flex, Container, MenuButton} from 'theme-ui';
import {useState, useLayoutEffect, useMemo} from 'react';
import {Link} from 'gatsby';
import {H} from '@hzdg/sectioning';
import {HzLogo} from '@components/Icons';
import useSize from '@hzdg/use-size';

interface HeaderProps {
  siteTitle?: string;
}

const Header = ({siteTitle = ''}: HeaderProps): JSX.Element => {
  const links = [
    // {
    //   url: '#react',
    //   label: 'React',
    // },
    // {
    //   url: '#gatsby',
    //   label: 'Gatsby',
    // },
    // {
    //   url: '#theme-ui',
    //   label: 'Theme UI',
    // },
    // {
    //   url: '#use-size',
    //   label: 'Use Size Hook',
    // },
  ];

  // const [{width: parentWidth}, parentRef] = useSize();
  // const [{width: childWidth}, childRef] = useSize();

  // const [minWidthAvailable, setMinWidthAvailable] = useState<number>(0);
  // const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  // useLayoutEffect(() => {
  //   if (childWidth > 0 && minWidthAvailable === 0) {
  //     setMinWidthAvailable(childWidth);
  //   }
  // }, [childWidth, minWidthAvailable]);

  // const isRendered = useMemo<boolean>(() => minWidthAvailable > 0, [
  //   minWidthAvailable,
  // ]);

  // const isDropdown = useMemo<boolean>(() => parentWidth < minWidthAvailable, [
  //   parentWidth,
  //   minWidthAvailable,
  // ]);

  // const preRenderedStyles = {
  //   flex: '0 0 auto',
  //   position: 'absolute',
  //   visibility: 'hidden',
  //   '> *': {
  //     flex: '0 0 auto',
  //   },
  // };

  // const rowStyles = {
  //   flex: '0 1 800px',
  // };

  // const dropdownStyles = {
  //   flexDirection: 'column',
  //   visibility: dropdownActive ? 'visible' : 'hidden',
  //   position: 'absolute',
  //   top: '100%',
  // };

  // const renderedStyles = isDropdown ? dropdownStyles : rowStyles;
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
            <HzLogo />
            <H
              sx={{
                ml: 2,
                color: `white`,
                fontSize: 5,
                whiteSpace: 'nowrap',
              }}
            >
              {/* Remove HZ as we are using logo instead */}
              {siteTitle.replace('HZ ', '')}
            </H>
          </Link>
          {/* <Flex
            ref={parentRef}
            sx={{
              flex: '1 1 auto',
              justifyContent: 'flex-end',
              pr: [3, 4],
              position: 'relative',
            }}
          >
            <Flex
              ref={childRef}
              sx={isRendered ? renderedStyles : preRenderedStyles}
            >
              {links.map(({label, url}) => (
                <Link
                  key={label}
                  to={url}
                  sx={{
                    variant: 'links.nav',
                    ml: 3,
                    flex: '1 1 auto',
                  }}
                >
                  {label}
                </Link>
              ))}
            </Flex>
            {isDropdown && (
              <MenuButton onClick={() => setDropdownActive(!dropdownActive)} />
            )}
          </Flex> */}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
