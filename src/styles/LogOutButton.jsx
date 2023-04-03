import { useState } from 'react';

const LogOutButton = ({ children, ...otherProps }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className='mr-[36px]'
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      {...otherProps}
    >
      {children}
      {isHover && <div className='h-[3px] bg-int-white-main'></div>}
    </div>
  );
};

export default LogOutButton;
