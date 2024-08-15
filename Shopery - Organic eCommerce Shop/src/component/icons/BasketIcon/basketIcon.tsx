import  { FC, useState } from 'react';
import classNames from 'classnames';

type BasketProps = {
  successIcon?: string;
  hoverIcon?: string;
  defaultIcon?: string;
  state?: 'default' | 'hover' | 'success';
  onClick?: () => void;
  className?: string;
};

const BasketIcon: FC<BasketProps> = ({
  successIcon = '/img/icon/succesBasket.svg',
  hoverIcon = '/img/icon/hoverBasket.svg',
  defaultIcon = '/img/icon/Basket.svg',
  state = 'default',
  onClick,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonState, setButtonState] = useState(state);

  const buttonClasses = classNames(
    'rounded-full flex items-center justify-center transition-all',
    className
  );

  const iconSrc =
    buttonState === 'success'
      ? successIcon
      : isHovered && buttonState === 'default'
      ? hoverIcon
      : defaultIcon;

  const handleClick = () => {
    setButtonState('success'); 
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
      <img  src={iconSrc} alt="icon" className="w-[40px] h-[40px]" />
    </button>
  );
};

export default BasketIcon;
