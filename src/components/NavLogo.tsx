/** @jsx jsx */
import {jsx, Link} from 'theme-ui';
import {HzLogo} from '@components/Icons';

const NavLogo = (): JSX.Element => (
  <Link variant={'logo'} href={'#logo'}>
    <HzLogo />
  </Link>
);

export default NavLogo;
