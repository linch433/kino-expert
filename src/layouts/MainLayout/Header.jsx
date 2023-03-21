import { Link } from 'react-router-dom';
import MenuLink from '../../styles/MenuLink';

const Header = () => {
  return (
    <div className="flex h-[60px] items-center justify-between bg-int-gray-main text-int-white-main px-10 text-lg">
      <Link to={'/'}>Logo</Link>
      <div className="flex items-center">
        <MenuLink linkPath="/content" text="Content" />
        <MenuLink linkPath="/about" text="About" />
        <MenuLink linkPath="/auth" text="Sign In" />
      </div>
    </div>
  );
};

export default Header;
