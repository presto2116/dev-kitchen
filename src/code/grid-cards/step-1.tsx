/** @jsx jsx */
import {jsx, Flex, Text, Grid} from 'theme-ui';

export interface CardProps {
  index: number;
}

const Card = ({index}: CardProps): JSX.Element => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 5,
        fontWeight: 600,
        color: 'white',
        bg: 'orange',
      }}
    >
      <Text variant={'boxText'}>{`Index = ${index}`}</Text>
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
