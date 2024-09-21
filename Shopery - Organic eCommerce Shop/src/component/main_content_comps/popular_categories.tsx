import React from "react";
import { categories } from "./categories";
import SectionHeader from "../Reusable component/sectionHeader";

const PopularCategories = () => {
  return (
    <div className="container">
      <section className="mt-[60px]">
        <SectionHeader
          linkText="View All"
          linkUrl=""
          title="Popular Categories"
          className=""
        />
        <div className="grid grid-cols-6 gap-6 max-2xl:grid-cols-5 max-2xl:gap-3 max-md:!grid-cols-3 place-content-center place-items-center mx-2 ">
          {categories.map(({ name, src }) => {
            return (
              <div
                key={name}
                className="group grid h-[213px] justify-center rounded-md border-[1px] border-gray-100 p-2 transition-shadow duration-300 hover:border-Primary hover:shadow-xl max-sm:max-w-[150px] max-sm:h-[180px] max-se:!h-[160px]"
              >
                <img className="mb-4  max-sm:m-auto" src={src} alt="" />
                <p className="text-center text-BodyLarge font-medium text-gray-900 group-hover:text-SoftPrimary max-md:text-BodyMedium max-sm:!text-BodySmall">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default PopularCategories;
