import React, { FC } from "react";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "fill" | "border" | "ghost";
  hoverEffect?: boolean;
  icon?: boolean;
  defaultIcon?: string;
  onClick?: () => void;
  className?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  size = "medium",
  variant = "fill",
  hoverEffect = true,
  icon = false,
  defaultIcon = "./img/icon/Group.svg",
  onClick,
  className,
}) => {
  const baseClasses =
    "rounded-full font-bold focus:outline-none transition-colors inline-flex items-center justify-center";

  const sizeClasses = {
    small: "w-[126px] h-[35px] text-BodyTiny font-semibold",
    medium: "w-[145px] h-[45px] text-BodySmall font-semibold",
    large: "w-[152px] h-[51px] text-BodyMedium font-semibold",
  };

  const variantClasses = {
    fill: "bg-Primary text-White",
    border: "border-Primary text-Primary",
    ghost: "bg-transparent text-Primary",
  };

  const hoverClasses = {
    fill: "hover:bg-HardPrimary",
    border: "hover:text-HardPrimary",
    ghost: "hover:bg-green-gray-100",
  };

  const buttonClasses = classNames(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    { [hoverClasses[variant]]: hoverEffect },
    className,
  );

  return (
    <div className="flex items-center">
      <button className={buttonClasses} onClick={onClick}>
        <div className="flex items-center justify-center">
          <span>{children}</span>
          {icon && (
            <div className="ml-2">
              <img
                src={defaultIcon}
                alt="icon"
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default Button;
