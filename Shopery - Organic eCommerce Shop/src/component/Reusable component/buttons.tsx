import React, { FC } from "react";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "fill" | "border" | "ghost";
  hoverEffect?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  size = "medium",
  variant = "fill",
  hoverEffect = true,
  icon,
  onClick,
  className,
}) => {
  const baseClasses =
    "rounded-full font-bold focus:outline-none transition-colors inline-flex items-center justify-center ";

  const sizeClasses = {
    small: "w-[126px] h-[35px] text-BodyTiny font-semibold",
    medium: "w-[145px] h-[45px] text-BodySmall font-semibold",
    large: "w-[152px] h-[51px] text-BodyMedium font-semibold",
  };

  const variantClasses = {
    fill: "bg-Primary text-White",
    border: "border-2 border-Primary text-Primary",
    ghost: "bg-transparent text-Primary",
  };

  const hoverClasses = {
    fill: "hover:bg-HardPrimary",
    border: "hover:bg-Primary hover:text-White",
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
    <button className={buttonClasses} onClick={onClick}>
      <span>{children}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
