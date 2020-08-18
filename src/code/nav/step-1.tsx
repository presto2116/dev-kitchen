/** @jsx jsx */
import {jsx, Flex, Link, Theme} from 'theme-ui';

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

  return (
    <Flex
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
  );
};
