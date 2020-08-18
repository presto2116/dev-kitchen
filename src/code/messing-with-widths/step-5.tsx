/** @jsx jsx */
import {jsx, Grid, Box, Heading, Text} from 'theme-ui';

import {useWindowSize} from '@hzdg/windowsize-monitor';

export const Code = (): JSX.Element => {
  const {width: windowWidth} = useWindowSize();

  const tabletBreakpoint = 850;
  const mobileBreakpoint = 550;

  const isDesktop = windowWidth > tabletBreakpoint;
  const isTablet = windowWidth > mobileBreakpoint;
  // const isMobile = windowWidth <= mobileBreakpoint; // Implied

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
    <Grid
      variant={'base'}
      sx={{
        gridTemplateColumns: columns,
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
          <Text variant={'boxText'}>{`Window is ${Math.round(windowWidth)}
          px`}</Text>
        </Box>
      ))}
    </Grid>
  );
};
