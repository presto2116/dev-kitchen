/** @jsx jsx */
import {jsx, Box, Heading, Text} from 'theme-ui';
import {Fragment} from 'react';
import useSize from '@hzdg/use-size';

import RecipeTemplate from '@templates/recipe-template';

const UseSizePage = (): JSX.Element => {
  const frontmatter = {
    title: 'Basic useSize Recipe',
    subtitle: 'Recipe',
    description: `Intro to @hzdg/use-size`,
    author: 'Preston Straight',
    authorGithub: 'https://github.com/presto2116',
    written: '2020-07-21',
    template: 'step-template',
    hzCoreComponent: '@hzdg/use-size',
    hzCoreLink: 'https://hz-core.netlify.app/use-size',
    keywords: ['@hzdg/use-size'],
    blogPostUrl: '/blog/use-size/',
  };

  const scope = {
    Fragment,
    useSize,
    jsx,
    Box,
    Heading,
    Text,
  };

  const Snippet = `
  const Code = () => {
    const [size, sizeRef] = useSize();
  
    return (
      <Fragment>
        <Box ref={sizeRef} sx={{bg: 'green', p: '15vw', textAlign: 'center'}}>       
          <Heading variant={'boxHeader'}>I'm a Box</Heading>
        </Box>
        <pre sx={{p: 3, bg: 'muted', fontSize: 3}}>
          {JSON.stringify(size, null, 2)}
        </pre>
      </Fragment>
    );
  };
  // Below is code to render in react-live view
  render(
    <Code />
  )`;

  return (
    <RecipeTemplate
      codeSnippet={Snippet}
      scope={scope}
      frontmatter={frontmatter}
    />
  );
};

export default UseSizePage;
