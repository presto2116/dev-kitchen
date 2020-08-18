/** @jsx jsx */
import {jsx, Heading, Text, Link as ThemeUiLink, Box} from 'theme-ui';
import {Link as GatsbyLink} from 'gatsby';
import {format, parseISO} from 'date-fns';

const PageHeading = ({frontmatter}): JSX.Element => {
  return (
    <Box sx={{mb: 4}}>
      {frontmatter.title && (
        <Heading variant={'page'}>{frontmatter.title}</Heading>
      )}
      {frontmatter.description && <Text>{frontmatter.description}</Text>}
      {frontmatter.author && frontmatter.authorGithub && (
        <Text>
          By:{' '}
          <ThemeUiLink href={frontmatter.authorGithub} sx={{color: 'text'}}>
            {frontmatter.author}
          </ThemeUiLink>
        </Text>
      )}
      {frontmatter.written && (
        <Text>{`${format(
          parseISO(frontmatter.written),
          'MMMM do, yyyy',
        )}`}</Text>
      )}
      {frontmatter.recipePostUrl && (
        <GatsbyLink to={frontmatter.recipePostUrl}>
          Check out the recipe
        </GatsbyLink>
      )}
    </Box>
  );
};

export default PageHeading;
