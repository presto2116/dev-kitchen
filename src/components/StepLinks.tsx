/** @jsx jsx */
import {jsx, Flex, Box, SxStyleProp, Heading, Text} from 'theme-ui';
import {useState, useLayoutEffect, useMemo} from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import {useLocation} from '@reach/router';
import useSize from '@hzdg/use-size';

const ALL_PATHS_QUERY = graphql`
  query MyQuery {
    allSitePage(filter: {path: {ne: "/recipes/"}}) {
      edges {
        node {
          path
        }
      }
    }
  }
`;

interface StepLinksProps {
  sx?: SxStyleProp;
  className?: string;
}

interface LinkProps {
  url?: string;
  label: string;
}

interface PaginationProps {
  pagination: LinkProps[];
}

const StepLinks = ({sx, className}: StepLinksProps): JSX.Element => {
  const {allSitePage} = useStaticQuery(ALL_PATHS_QUERY);
  const {pathname} = useLocation();
  const pathAry = pathname.split('/');
  const recipePost = pathAry[pathAry.findIndex((i) => i === 'recipes') + 1];
  const linkList = allSitePage.edges.filter(
    (i) => i.node.path.includes(recipePost) && i.node.path.includes('step'),
  );
  const links: LinkProps[] = linkList
    // TODO: type safety
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((i: any) => {
      const pathAry: string[] = i.node.path.split('/');
      const uniquePAthAry = [...new Set(pathAry)];
      const label = uniquePAthAry[uniquePAthAry.length - 1].replace(
        /[^0-9]+/g,
        '',
      );
      return {
        url: i.node.path,
        label: label,
      };
    })
    .sort(function (a: LinkProps, b: LinkProps) {
      return parseInt(a.label) - parseInt(b.label);
    });

  const currentIndex = links.findIndex((link) => link.url === pathname);
  const previous = links[currentIndex - 1];
  const next = links[currentIndex + 1];

  const getPaginationAry = (
    currentPageIndex: number,
    links: LinkProps[],
  ): LinkProps[] => {
    const temp = links.map((link, i) => {
      if (
        i === 0 || // if first one
        i === links.length - 1 || // or last one
        (i <= currentPageIndex + 2 && i >= currentPageIndex - 2) // or within 2 of current page
      ) {
        return link;
      } else {
        return {label: '...'};
      }
    });

    return temp.filter((link, index) => {
      if (index != 0) {
        return temp[index - 1].label !== link.label;
      }
      return link;
    });
  };

  const desktopPaginationAry = getPaginationAry(currentIndex, links);
  const mobilePaginationAry = desktopPaginationAry.filter(
    (p, i) =>
      i === desktopPaginationAry.length - 1 ||
      Number(p.label) === currentIndex + 1,
  );
  const desktopPagination = ({pagination}: PaginationProps): JSX.Element[] => {
    return pagination.map((link: LinkProps, index: number) =>
      link.url ? (
        <Link
          key={link.label + index}
          to={link.url}
          activeClassName="active"
          sx={{
            variant: 'links.page',
            display: 'block',
          }}
        >
          <span>{link.label}</span>
        </Link>
      ) : (
        // use same links.page style but remove hover
        <Text
          key={link.label + index}
          sx={{
            variant: 'links.page',
            display: 'block',
            px: 0,
            '&:hover:after': {bg: 'background'},
          }}
        >
          {link.label}
        </Text>
      ),
    );
  };
  const mobilePagination = ({pagination}: PaginationProps): JSX.Element => {
    return (
      <Text
        sx={{
          variant: 'links.page',
          display: 'block',
          px: 0,
          '&:after': {
            display: 'none',
          },
        }}
      >{`${pagination[0].label} / ${
        pagination?.[1]?.label || pagination[0].label
      }`}</Text>
    );
  };

  // const [{width: parentWidth}, parentRef] = useSize();
  // const [{width: childWidth}, childRef] = useSize();

  // const [minWidthAvailable, setMinWidthAvailable] = useState<number>(0);

  // useLayoutEffect(() => {
  //   if (childWidth > 0 && minWidthAvailable === 0) {
  //     setMinWidthAvailable(childWidth);
  //   }
  // }, [childWidth, minWidthAvailable]);

  // const isMobile = useMemo<boolean>(() => parentWidth < minWidthAvailable, [
  //   parentWidth,
  //   minWidthAvailable,
  // ]);

  return (
    <Flex
      sx={{
        justifyContent: ['flex-end', 'flex-start'],
        mb: 3,
        ...sx,
      }}
      className={className}
      // ref={parentRef}
    >
      <Flex
        sx={{
          listStyle: 'none',
          display: ['flex', 'none'],
          px: 0,
          my: 2,
          boxShadow: '0px 0px 22px -5px rgba(143, 143, 143, 0.62)',
        }}
      >
        <Link
          to={previous?.url || pathname}
          disabled={!previous}
          sx={{variant: 'links.arrow', ml: 2}}
        >
          <FaArrowLeft />
        </Link>
        {mobilePagination({pagination: mobilePaginationAry})}
        <Link
          to={next?.url || pathname}
          disabled={!next}
          sx={{variant: 'links.arrow', mr: 2}}
        >
          <FaArrowRight />
        </Link>
      </Flex>
      <Flex
        // ref={childRef}
        sx={{
          listStyle: 'none',
          display: ['none', 'flex'],
          flex: '0 0 auto',
          px: 0,
          my: 2,
          boxShadow: '0px 0px 22px -5px rgba(143, 143, 143, 0.62)',
          '> *': {
            flex: '0 0 auto',
          },
        }}
      >
        <Link
          to={previous?.url || pathname}
          disabled={!previous}
          sx={{variant: 'links.arrow', ml: 2}}
        >
          <FaArrowLeft />
        </Link>
        {desktopPagination({pagination: desktopPaginationAry})}
        <Link
          to={next?.url || pathname}
          disabled={!next}
          sx={{variant: 'links.arrow', mr: 2}}
        >
          <FaArrowRight />
        </Link>
      </Flex>
    </Flex>
  );
};

export default StepLinks;
