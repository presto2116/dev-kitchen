/** @jsx jsx */
import {jsx, Flex, Heading, Box, MenuButton, Text, Link} from 'theme-ui';

import RecipeTemplate from '@templates/recipe-template';
import {useState, useLayoutEffect, useMemo} from 'react';
import useSize from '@hzdg/use-size';
import {WebsiteWrapper} from '@code/nav/website-wrapper';
import NavLogo from '@components/NavLogo';

const NavPage = (): JSX.Element => {
  const frontmatter = {
    title: 'A Nav that just works',
    subtitle: 'Recipe',
    description: `A nav that isn't based on media queries`,
    author: 'Preston Straight',
    authorGithub: 'https://github.com/presto2116',
    written: '2020-07-19',
    template: 'step-template',
    hzCoreComponent: '@hzdg/use-size',
    hzCoreLink: 'https://hz-core.netlify.app/use-size',
    keywords: ['@hzdg/use-size', 'Nav', 'flexbox'],
    blogPostUrl: '/blog/nav/',
  };

  const scope = {
    useState,
    useLayoutEffect,
    useMemo,
    WebsiteWrapper,
    useSize,
    jsx,
    Flex,
    Heading,
    MenuButton,
    Link,
    Box,
    Text,
    NavLogo,
  };

  const Snippet = `
  const Nav = () => {
    const links = [
      {
        url: '#react',
        label: 'React',
      },
      {
        url: '#gatsby',
        label: 'Gatsby',
      },
      {
        url: '#theme-ui',
        label: 'Theme UI',
      },
      {
        url: '#use-size',
        label: 'Use Size Hook',
      },
    ];
  
    const [{width: parentWidth}, parentRef] = useSize();
    const [{width: childWidth}, childRef] = useSize();
  
    const [minWidthAvailable, setMinWidthAvailable] = useState(0);
    const [dropdownActive, setDropdownActive] = useState(false);
  
    useLayoutEffect(() => {
      if (childWidth > 0 && minWidthAvailable === 0) {
        setMinWidthAvailable(childWidth);
      }
    }, [childWidth, minWidthAvailable]);
  
    const isRendered = useMemo(() => minWidthAvailable > 0, [
      minWidthAvailable,
    ]);
  
    const isDropdown = useMemo(() => parentWidth < minWidthAvailable, [
      parentWidth,
      minWidthAvailable,
    ]);
  
    const preRenderedStyles = {
      flex: '0 0 auto',
      position: 'absolute',
      visibility: 'hidden',
      '> *': {
        flex: '0 0 auto',
      },
    };
  
    const rowStyles = {
      flex: '0 1 800px',
    };
  
    const dropdownStyles = {
      flexDirection: 'column',
      visibility: dropdownActive ? 'visible' : 'hidden',
      position: 'absolute',
      top: '100%',
    };
  
    const renderedStyles = isDropdown ? dropdownStyles : rowStyles;
  
    return (
      <WebsiteWrapper>
        <Flex sx={{alignItems: 'center', bg: 'muted'}}>
          <NavLogo />
          <Flex
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
                  href={url}
                  variant={'nav'}
                  sx={{
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
          </Flex>
        </Flex>
      </WebsiteWrapper>
    );
  };
  // Below is code to render in react-live view
  render(
    <Nav />
  )`;

  return (
    <RecipeTemplate
      codeSnippet={Snippet}
      scope={scope}
      frontmatter={frontmatter}
    />
  );
};

export default NavPage;
