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

  const [{width: parentWidth}, parentRef] = useSize();
  const [{width: childWidth}, childRef] = useSize();

  const [minWidthAvailable, setMinWidthAvailable] = useState<number>(0);

  useLayoutEffect(() => {
    if (childWidth > 0 && minWidthAvailable === 0) {
      setMinWidthAvailable(childWidth);
    }
  }, [childWidth, minWidthAvailable]);

  const isRendered = useMemo<boolean>(() => minWidthAvailable > 0, [
    minWidthAvailable,
  ]);

  const isDropdown = useMemo<boolean>(() => parentWidth < minWidthAvailable, [
    parentWidth,
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
    flex: '0 1 800px',
    justifyContent: 'space-between',
    border: (theme: Theme) => `3px solid ${theme?.colors?.green}`,
  };

  return (
    <Box>
      <Flex
        ref={parentRef}
        sx={{
          flex: '1 1 auto',
          border: (theme: Theme) => `3px solid ${theme?.colors?.red}`,
        }}
      >
        <Flex
          ref={childRef}
          sx={isRendered ? renderedStyles : preRenderedStyles}
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
      </Flex>
      <StateDialog
        states={[
          `parentWidth: ${parentWidth}`,
          `childWidth: ${childWidth}`,
          `minWidthAvailable: ${minWidthAvailable}`,
          `isDropdown: ${isDropdown}`,
        ]}
      />
    </Box>
  );
};
