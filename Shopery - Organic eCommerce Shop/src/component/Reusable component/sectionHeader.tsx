import React from 'react';

interface SectionHeaderProps {
  title: string;
  linkText: string;
  linkUrl: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, linkText, linkUrl }) => {
  return (
    <div className="flex justify-between mt-[100px] mb-8">
      <h1 className="text-Heading05 font-semibold text-gray-900">
        {title}
      </h1>
      <div className="flex items-center justify-center space-x-3">
        <a href={linkUrl} className="text-BodyMedium font-medium text-Primary">
          {linkText}{" "}
        </a>
        <img className="w-[15px]" src="/img/icon/Group.svg" alt="View All Icon" />
      </div>
    </div>
  );
};

export default SectionHeader;
