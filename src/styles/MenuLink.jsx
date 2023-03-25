import { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuLink = props => {
  const { linkPath, text, handleClick } = props;
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      to={linkPath}
      className='mr-[36px]'
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      onClick={handleClick}
    >
      {text}
      {isHover && <div className='h-[3px] bg-int-white-main'></div>}
    </Link>
  );
};

export default MenuLink;
