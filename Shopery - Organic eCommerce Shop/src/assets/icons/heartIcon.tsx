import React, { FC, useState } from 'react';
import classNames from 'classnames';

type HeartProps = {
  successIcon?: string;
  hoverIcon?: string;
  defaultIcon?: string;
  state?: 'default' | 'hover' | 'active';
  onClick?: () => void;
  className?: string;
};

const HeartIcon: FC<HeartProps> = ({
  successIcon = '/img/icon/heartActive.svg',
  hoverIcon = '/img/icon/heartHover.svg',
  defaultIcon = '/img/icon/heart.svg',
  state = 'default',
  onClick,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonState, setButtonState] = useState(state);

  const buttonClasses = classNames(
    'rounded-full flex items-center justify-center transition-all',
    
  );

  const iconSrc =
    buttonState === 'active'
      ? successIcon
      : isHovered && buttonState === 'default'
      ? hoverIcon
      : defaultIcon;

  const handleClick = () => {
    setButtonState('active'); 
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img  src={iconSrc} alt="icon" className={`w-[40px] h-[40px] ${className}`} />
    </button>
  );
};

export default HeartIcon;
