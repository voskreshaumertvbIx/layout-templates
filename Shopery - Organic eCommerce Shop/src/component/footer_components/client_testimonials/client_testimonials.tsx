import React from "react";
import { client } from "./client";

const ClientTestimonials = () => {
  return (
    <section className="mt-[60px] flex flex-col">
      <h1 className="mb-[32px] text-center text-Heading05 font-semibold text-gray-900">
        Client Testimonials
      </h1>
      <div className="flex space-x-4">
        {client.map(({ img, name }, index) => (
          <div
            key={index}
            className="relative rounded-lg bg-white p-6 shadow-lg"
          >
            <img src="img/qq.png" alt="" className="mb-6" />
            <p className="mb-4 text-BodySmall font-regular text-gray-700">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src={img} alt={name} className="h-10 w-10 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-BodyMedium font-medium text-gray-900">
                    {name}
                  </span>
                  <span className="text-BodySmall font-regular text-gray-400">
                    Customer
                  </span>
                </div>
              </div>
              <div className="">
                <img src="img/stars.png" alt="Rating" className="6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
