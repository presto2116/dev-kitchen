/** @jsx jsx */
import {jsx} from 'theme-ui';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

interface Meta {
  name: string;
  content: string;
}

interface MetaProps {
  title: string;
  description: string;
  author?: string;
  lang?: string;
  meta?: Meta[];
  keywords?: string[];
}

const DEFAULT_SEO_QUERY = graphql`
  query DEFAULT_SEO_QUERY {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export default function SEO({
  title,
  description,
  author,
  lang = `en`,
  meta = [],
  keywords = [],
}: MetaProps): JSX.Element {
  return (
    <StaticQuery
      query={DEFAULT_SEO_QUERY}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const metaAuthor = author || data.site.siteMetadata.author;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: metaAuthor,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : [],
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}
