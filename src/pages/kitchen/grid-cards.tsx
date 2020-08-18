/** @jsx jsx */
import {jsx, Flex, Heading, Text, Grid} from 'theme-ui';
import useSize from '@hzdg/use-size';

import KitchenTemplate from '@templates/kitchen-template';

const MessingWithWidthsKitchen = (): JSX.Element => {
  const frontmatter = {
    title: 'Grid Cards',
    subtitle: 'Kitchen',
    description: 'TODO: description',
    author: 'Preston Straight',
    authorGithub: 'https://github.com/presto2116',
    written: '2020-08-01',
    template: 'kitchen-template',
    hzCoreComponent: '@hzdg/use-size',
    hzCoreLink: 'https://hz-core.netlify.app/use-size',
    keywords: ['@hzdg/use-size', 'css-grid'],
    recipePostUrl: '/recipes/grid-cards/',
  };

  const scope = {
    useSize,
    Flex,
    Heading,
    Text,
    Grid,
  };

  const Snippet = `
  const Card = ({index}) => {
    const [{width: childWidth}, sizeRef] = useSize();
    const smallBreakpoint = 150;
    const mediumBreakpoint = 400;
  
    const isLarge = childWidth > mediumBreakpoint;
    const isMedium = childWidth > smallBreakpoint;
    // const isSmall = childWidth <= smallBreakpoint;     // Implied
  
    const bg = isLarge ? 'orange' : isMedium ? 'red' : 'blue';
  
    const text = isLarge ? 'I am LARGE!!!' : isMedium ? "I'm medium" : 'small';
  
    const indexString =
      childWidth > smallBreakpoint ? \`Index = \${index}\` : \`I = \${index}\`;
    return (
      <Flex
        ref={sizeRef}
        sx={{
          flexDirection: isLarge ? 'row' : 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 5,
          fontWeight: 600,
          color: 'white',
          bg: bg,
          gridColumnStart:
            index % 5 === 0
              ? 'span 4'
              : index % 4 === 0
              ? 'span 3'
              : index % 3 === 0
              ? 'span 2'
              : 'span 1',
        }}
      >
        <Text variant={'boxText'}>{indexString}</Text>
        <Heading variant={'boxHeader'} sx={{fontSize: 5}}>
          {text}
        </Heading>
        <Text variant={'boxText'}>{\`\${Math.round(childWidth)}px \${
          isMedium ? 'wide' : ''
        }\`}</Text>
      </Flex>
    );
  };
  
  const Code = () => {
    const blocks = Array.from(Array(20).keys());
    return (
      <Grid
        variant={'base'}
        sx={{
          gridAutoFlow: 'dense',
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        }}
      >
        {blocks.map((i) => {
          return <Card key={i} index={i} />;
        })}
      </Grid>
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

export default MessingWithWidthsKitchen;
