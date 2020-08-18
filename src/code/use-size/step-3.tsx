/** @jsx jsx */
import {jsx, Box, Heading} from 'theme-ui';
import {Fragment} from 'react';
import useSize from '@hzdg/use-size';

export const Code = (): JSX.Element => {
  const [size, sizeRef] = useSize();

  return (
    <Fragment>
      <Box sx={{bg: 'green', p: '15vw', textAlign: 'center'}} ref={sizeRef}>
        <Heading variant={'boxHeader'}>{`I'm a Box`}</Heading>
      </Box>
      <pre sx={{p: 3, bg: 'muted', fontSize: [2, null, 3]}}>
        {JSON.stringify(size, null, 2)}
      </pre>
    </Fragment>
  );
};
