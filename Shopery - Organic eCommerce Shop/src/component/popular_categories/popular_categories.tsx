import React from "react";
import { categories } from "./categories";

const PopularCategories = () => {
  return (
    <section className="mt-[60px]">
      <div className="flex justify-between mb-8">
        <h1 className="text-Heading05 font-semibold text-gray-900">
          Popular Categories
        </h1>
        <div className="flex items-center justify-center space-x-3">
          <a href="" className="text-BodyMedium font-medium text-Primary">
            View All{" "}
          </a>
          <img className="w-[15px]" src="/img/icon/Group.svg" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-6">
        {categories.map(({ name, src }) => {
          return (
            <div key={name} className="group grid justify-center rounded-md border-[1px] border-gray-100 p-2 hover:border-HardPrimary h-[213px]">
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
