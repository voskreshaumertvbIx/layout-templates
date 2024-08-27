import React from "react";
import { categories } from "./categories";
import SectionHeader from "../Reusable component/sectionHeader";

const PopularCategories = () => {
  return (
    <section className="mt-[60px]">
      <SectionHeader
        linkText="View All"
        linkUrl=""
        title="Popular Categories"
      />
      <div className="grid grid-cols-6 gap-6">
        {categories.map(({ name, src }) => {
          return (
            <div
              key={name}
              className="group grid h-[213px] justify-center rounded-md border-[1px] border-gray-100 p-2 transition-shadow duration-300 hover:border-Primary hover:shadow-xl"
            >
              <img className="mb-4" src={src} alt="" />
              <p className="text-center text-BodyLarge font-medium text-gray-900 group-hover:text-SoftPrimary">
                {name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularCategories;
