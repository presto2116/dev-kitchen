/** @jsx jsx */
import {jsx, Flex, Heading, Text, Grid} from 'theme-ui';

import useSize from '@hzdg/use-size';

export interface CardProps {
  index: number;
}

const Card = ({index}: CardProps): JSX.Element => {
  const [{width: childWidth}, sizeRef] = useSize();
  const smallBreakpoint = 150;
  const mediumBreakpoint = 400;

  const isLarge = childWidth > mediumBreakpoint;
  const isMedium = childWidth > smallBreakpoint;
  // const isSmall = childWidth <= smallBreakpoint;     // Implied

  const bg = isLarge ? 'orange' : isMedium ? 'red' : 'blue';

  const text = isLarge ? 'I am LARGE!!!' : isMedium ? "I'm medium" : 'small';
  return (
    <Flex
      ref={sizeRef}
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 5,
        fontWeight: 600,
        color: 'white',
        bg: bg,
      }}
    >
      <Text variant={'boxText'}>{`Index = ${index}`}</Text>
      <Heading variant={'boxHeader'} sx={{fontSize: 5}}>
        {text}
      </Heading>
    </Flex>
  );
};

export const Code = (): JSX.Element => {
  const blocks = [...Array(20).keys()];
  return (
    <Grid
      variant={'base'}
      sx={{
        gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
      }}
    >
      {blocks.map((i) => {
        return <Card key={i} index={i} />;
      })}
    </Grid>
  );
};
