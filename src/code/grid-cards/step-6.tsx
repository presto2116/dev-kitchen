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
        gridColumnStart:
          index % 5 === 0
            ? `span 4`
            : index % 4 === 0
            ? `span 3`
            : index % 3 === 0
            ? `span 2`
            : `span 1`,
      }}
    >
      <Text variant={'boxText'}>{`Index = ${index}`}</Text>
      <Heading variant={'boxHeader'} sx={{fontSize: 5}}>
        {text}
      </Heading>
      <Text variant={'boxText'}>{`${Math.round(childWidth)}px wide`}</Text>
    </Flex>
  );
};

export const Code = (): JSX.Element => {
  const blocks = [...Array(20).keys()];
  return (
    <Grid
      variant={'base'}
      sx={{
        gridAutoFlow: 'dense',
        gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`,
      }}
    >
      {blocks.map((i) => {
        return <Card key={i} index={i} />;
      })}
    </Grid>
  );
};
