/** @jsx jsx */
import {jsx, Flex, Link, Box, Theme} from 'theme-ui';

import useSize from '@hzdg/use-size';
import {StateDialog} from './state-dialog';

export const Code = (): JSX.Element => {
  const links = [
    {
      url: '#react',
      label: 'React',
    },
    {
      url: '#gatsby',
      label: 'Gatsby',
    },
    {
      url: '#theme-ui',
      label: 'Theme UI',
    },
    {
      url: '#use-size',
      label: 'Use Size Hook',
    },
  ];

  const [{width}, ref] = useSize();

  return (
    <Box>
      <Flex
        ref={ref}
        sx={{
          flex: '1 1 auto',
          justifyContent: 'space-between',
          border: (theme: Theme) => `3px solid ${theme?.colors?.green}`,
        }}
      >
        {links.map(({label, url}) => (
          <Link
            key={label}
            href={url}
            variant={'nav'}
            sx={{
              flex: '0 0 auto',
            }}
          >
            {label}
          </Link>
        ))}
      </Flex>
      <StateDialog states={[`width: ${width}`]} />
    </Box>
  );
};
