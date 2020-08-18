/** @jsx jsx */
import {jsx, Grid, Box, Heading} from 'theme-ui';

export const Code = (): JSX.Element => {
  const cards = [...Array(20).keys()];

  return (
    <Grid
      variant={'base'}
      sx={{
        gridTemplateColumns: 'repeat(3, 1fr)',
        '@media screen and (max-width: 850px)': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@media screen and (max-width: 550px)': {
          gridTemplateColumns: 'repeat(1, 1fr)',
        },
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
