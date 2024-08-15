import React, { useState } from "react";
import classNames from "classnames";

type CheckboxResProps = {
  className?: string;
  onChange?: (isChecked: boolean) => void;
};

const CheckboxRes: React.FC<CheckboxResProps> = ({ className }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const baseClasses =
    "w-[20px] h-[20px] flex items-center justify-center cursor-pointer transition-all rounded-sm";

  const checkboxClasses = classNames(
    baseClasses,
    {
      "bg-Primary text-white shadow-lg": isChecked,
      "bg-white border-[1px] border-Primary shadow-lg": isHovered && !isChecked,
      "bg-white border-[1px] border-gray-600": !isHovered && !isChecked,
    },
    className,
  );

  return (
    <div
      className={checkboxClasses}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isChecked && <span>✔</span>}
    </div>
  );
};

export default CheckboxRes;
