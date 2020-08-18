/** @jsx jsx */
import {jsx, Flex, SxStyleProp} from 'theme-ui';
import {Link} from 'gatsby';
import {useLocation} from '@reach/router';

interface BreadCrumbsProps {
  sx?: SxStyleProp;
  className?: string;
}

interface linkProps {
  url: string;
  label: string;
}
// TODO: Clean this up, its garbage
const getLinks = (pathname: string): linkProps[] => {
  const uniquePathNames = [...new Set(pathname.split('/'))];
  const addSlash = uniquePathNames.map((str) => `/${str}`);
  let prevLink = '';
  return addSlash.map((str: string) => {
    prevLink += str;
    const almostLabel = str.replace('/', '').replace(/-/g, ' ');
    const label = almostLabel !== '' ? almostLabel : 'home';
    const url = `${prevLink}/`.replace(/\/\//g, '/');

    return {
      url: url,
      label: label,
    };
  });
};

const BreadCrumbs = ({sx, className}: BreadCrumbsProps): JSX.Element => {
  const {pathname} = useLocation();
  const links = getLinks(pathname);

  return (
    <Flex
      className={className}
      as={'ul'}
      sx={{
        ...sx,
        listStyle: 'none',
        px: 0,
        my: 2,
        ml: -3, // move list over due to link padding. (line up text)
      }}
    >
      {links.map(({url, label}, i) => {
        const lastLink = links.length === i + 1;
        return (
          <Flex
            as={'li'}
            key={label}
            sx={{alignItems: 'center', flex: '0 0 auto'}}
          >
            <Link
              to={url}
              sx={{variant: 'links.breadcrumb'}}
              disabled={lastLink}
            >
              {label}
            </Link>
            {!lastLink && <span>/</span>}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default BreadCrumbs;
