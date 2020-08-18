/** @jsx jsx */
import {jsx, SxStyleProp} from 'theme-ui';
import {Link, graphql, useStaticQuery} from 'gatsby';
import {format, parseISO} from 'date-fns';

const ALL_INDEX_MDX = graphql`
  query AllIndexMdx {
    allMdx(filter: {frontmatter: {template: {eq: "index-template"}}}) {
      edges {
        node {
          slug
          frontmatter {
            template
            title
            written
          }
        }
      }
    }
  }
`;

interface BlogListProps {
  sx?: SxStyleProp;
  className?: string;
}

const BlogList = ({sx, className}: BlogListProps): JSX.Element => {
  const {allMdx} = useStaticQuery(ALL_INDEX_MDX);

  const links = allMdx.edges
    .sort(
      (a, b) =>
        new Date(a.node.frontmatter.written) -
        new Date(b.node.frontmatter.written),
    )
    .map((i) => {
      const label = `${i.node.frontmatter.title} - ${format(
        parseISO(i.node.frontmatter.written),
        'MMMM do, yyyy',
      )}`;
      return {
        url: `/blog/${i.node.slug}`,
        label: label,
      };
    });
  return (
    <ul sx={{...sx, variant: 'styles.ul'}} className={className}>
      {links.map((link) => (
        <li key={link.label}>
          <Link to={link.url} sx={{variant: 'links.recipe'}}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
