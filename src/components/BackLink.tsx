/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Link} from 'gatsby';
import {FaArrowLeft} from 'react-icons/fa';

interface BackLinkProps {
  to: string;
  children: string;
}

const BackLink = ({to, children}: BackLinkProps): JSX.Element => (
  <Link to={to} sx={{variant: 'links.back'}}>
    <FaArrowLeft />
    {children}
  </Link>
);

export default BackLink;
