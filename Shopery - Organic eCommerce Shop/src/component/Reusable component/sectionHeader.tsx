import classNames from "classnames";
import React from "react";

interface SectionHeaderProps {
  title: string;
  linkText: string;
  linkUrl: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  linkText,
  linkUrl,
  className,
}) => {
  return (
    <div className="container">
      <div
        className={classNames(
          "m-auto mb-8 mt-[100px] flex justify-between max-md:!w-[350px] max-md:justify-center  max-xl:max-w-[700px] max-2xl:w-[1200px]",
          className,
        )}
      >
        <h1 className="text-Heading05 font-semibold text-gray-900 max-lg:text-BodyXXL max-md:!text-BodyLarge max-md:mr-4">
          {title}
        </h1>
        <div className="flex items-center justify-center space-x-3 max-md:ml-4">
          <a
            href={linkUrl}
            className="text-BodyMedium font-medium text-Primary max-md:text-BodySmall "
          >
            {linkText}
          </a>
          <img
            className="w-[15px] max-md:w-[12px]"
            src="/img/icon/Group.svg"
            alt="View All Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
