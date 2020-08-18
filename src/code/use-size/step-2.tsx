/** @jsx jsx */
import {jsx, Box, Heading} from 'theme-ui';
import useSize from '@hzdg/use-size';

export const Code = (): JSX.Element => {
  const [, sizeRef] = useSize();

  return (
    <Box sx={{bg: 'green', p: '15vw', textAlign: 'center'}} ref={sizeRef}>
      <Heading variant={'boxHeader'}>{`I'm a Box`}</Heading>
    </Box>
  );
};
