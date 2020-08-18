/** @jsx jsx */
import {jsx, Grid, Box, Heading, Text, Flex} from 'theme-ui';

import useSize from '@hzdg/use-size';

export const Code = (): JSX.Element => {
  const [{width: parentWidth}, sizeRef] = useSize();

  const tabletBreakpoint = 850;
  const mobileBreakpoint = 550;

  const isDesktop = parentWidth > tabletBreakpoint;
  const isTablet = parentWidth > mobileBreakpoint;
  // const isMobile = parentWidth <= mobileBreakpoint; // Implied

  const columns = isDesktop
    ? 'repeat(3, 1fr)'
    : isTablet
    ? 'repeat(2, 1fr)'
    : 'repeat(1, 1fr)';

  const bg = isDesktop ? 'green' : isTablet ? 'yellow' : 'red';

  const text = isDesktop
    ? 'Desktop Layout'
    : isTablet
    ? 'Tablet Layout'
    : 'Mobile Layout';

  const cards = [...Array(20).keys()];
  return (
    <Flex>
      <Box sx={{flex: '0 0 400px', bg: 'grey', pt: 5, textAlign: 'center'}}>
        <Heading
          variant={'boxHeader'}
          sx={{color: 'text'}}
        >{`I'm a dumb side bar`}</Heading>
      </Box>
      <Grid
        ref={sizeRef}
        variant={'base'}
        sx={{
          gridTemplateColumns: columns,
          flex: '1 1 auto',
        }}
      >
        {cards.map((i) => (
          <Box
            key={i}
            sx={{
              textAlign: 'center',
              bg: bg,
              py: 4,
            }}
          >
            <Heading variant={'boxHeader'} sx={{fontSize: 5}}>
              {text}
            </Heading>
            <Text variant={'boxText'}>{`Grid is ${Math.round(parentWidth)}
          px`}</Text>
          </Box>
        ))}
      </Grid>
    </Flex>
  );
};
