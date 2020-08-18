/** @jsx jsx */
import {jsx, Box, Heading, Text} from 'theme-ui';
import {Fragment} from 'react';
import useSize from '@hzdg/use-size';

import KitchenTemplate from '@templates/kitchen-template';

const UseSizePage = (): JSX.Element => {
  const frontmatter = {
    title: 'Basic useSize Kitchen',
    subtitle: 'Kitchen',
    description: `Intro to @hzdg/use-size`,
    author: 'Preston Straight',
    authorGithub: 'https://github.com/presto2116',
    written: '2020-07-21',
    template: 'kitchen-template',
    hzCoreComponent: '@hzdg/use-size',
    hzCoreLink: 'https://hz-core.netlify.app/use-size',
    keywords: ['@hzdg/use-size'],
    recipePostUrl: '/recipes/use-size/',
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
    <KitchenTemplate
      codeSnippet={Snippet}
      scope={scope}
      frontmatter={frontmatter}
    />
  );
};

export default UseSizePage;
