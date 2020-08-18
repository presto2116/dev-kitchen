/** @jsx jsx */
import {jsx, Box, Heading} from 'theme-ui';

export const Code = (): JSX.Element => {
  return (
    <Box sx={{bg: 'green', p: '15vw', textAlign: 'center'}}>
      <Heading variant={'boxHeader'}>{`I'm a Box`}</Heading>
    </Box>
  );
};
