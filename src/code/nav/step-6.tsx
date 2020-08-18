/** @jsx jsx */
import {jsx, Flex, Link, Box, Theme} from 'theme-ui';
import {useState, useLayoutEffect, useMemo} from 'react';

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

  const [minWidthAvailable, setMinWidthAvailable] = useState<number>(0);

  useLayoutEffect(() => {
    if (width > 0 && minWidthAvailable === 0) {
      setMinWidthAvailable(width);
    }
  }, [width, minWidthAvailable]);

  const isRendered = useMemo<boolean>(() => minWidthAvailable > 0, [
    minWidthAvailable,
  ]);

  const isDropdown = useMemo<boolean>(() => width < minWidthAvailable, [
    width,
    minWidthAvailable,
  ]);

  const preRenderedStyles = {
    flex: '0 0 auto',
    position: 'absolute',
    visibility: 'hidden',
    '> *': {
      flex: '0 0 auto',
    },
  };

  const renderedStyles = {
    flex: '1 1 auto',
    justifyContent: 'space-between',
    border: (theme: Theme) => `3px solid ${theme?.colors?.green}`,
  };

  return (
    <Box>
      <Flex ref={ref} sx={isRendered ? renderedStyles : preRenderedStyles}>
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
      <StateDialog
        states={[
          `width: ${width}`,
          `minWidthAvailable: ${minWidthAvailable}`,
          `isDropdown: ${isDropdown}`,
        ]}
      />
    </Box>
  );
};
