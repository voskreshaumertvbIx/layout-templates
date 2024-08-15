import classNames from "classnames";
import React, { FC } from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant: "sale" | "bestSale" | "new" | "out";
  className?: string;
};

const Badge: FC<BadgeProps> = ({ children, variant = "new", className }) => {
  const baseClasses = "px-3 py-1 text-BodySmall font-regular rounded-lg";

  const variantClasses = {
    sale: "bg-Danger text-White",
    bestSale: "bg-blue-500 text-White",
    new: "bg-Warning text-White",
    out: "bg-gray-900 text-White",
  };

  const badgeClasses = classNames(
    baseClasses,
    variantClasses[variant],
    className,
  );

  return <span className={badgeClasses}>{children}</span>;
};

export default Badge;
