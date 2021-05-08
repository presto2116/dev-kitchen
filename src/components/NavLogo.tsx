/** @jsx jsx */
import {jsx, Link} from 'theme-ui';
import {Logo} from '@components/Icons';

const NavLogo = (): JSX.Element => (
  <Link variant={'logo'} href={'#logo'}>
    <Logo />
  </Link>
);

export default NavLogo;
