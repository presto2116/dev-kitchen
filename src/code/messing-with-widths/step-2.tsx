/** @jsx jsx */
import {jsx, Grid, Box, Heading} from 'theme-ui';

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
            bg: 'blue',
            py: 4,
          }}
        >
          <Heading variant={'boxHeader'} sx={{fontSize: 5}}>
            Card
          </Heading>
        </Box>
      ))}
    </Grid>
  );
};
