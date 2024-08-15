import  { FC, useState } from 'react';
import classNames from 'classnames';

type EyeProps = {
 
  successIcon?: string;
  defaultIcon?: string;
  state?: 'default' | 'success';
  onClick?: () => void;
  className?: string;
};

const EyeIcon: FC<EyeProps> = ({
  
  successIcon = '/img/icon/eyeSucces.svg',
  defaultIcon = '/img/icon/eye.svg',
  state = 'default',
  onClick,
  className,
}) => {
  
  const [buttonState, setButtonState] = useState(state);

  const buttonClasses = classNames(
    'rounded-full flex items-center justify-center transition-all',
    className
  );

  const iconSrc =
    buttonState === 'success'
      ? successIcon
      : defaultIcon

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
    >
      <img  src={iconSrc} alt="icon" className="w-[40px] h-[40px]" />
    </button>
  );
};

export default EyeIcon;
