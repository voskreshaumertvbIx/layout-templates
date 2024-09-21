import React from "react";
import { team, trusted } from "./aboutus";
import CheckboxRes from "../Reusable component/checkbox";
import Button from "../Reusable component/buttons";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div className="container">
    <section className="mt-[80px] max-2xl:flex max-2xl:flex-col max-2xl:text-center max-2xl:justify-center max-2xl:items-center max-xl:p-10">
      <div className="mb-[80px] flex items-center justify-center space-x-[28px]">
        <div className="flex flex-col">
          <h1 className="mb-8 text-Heading01 font-semibold text-gray-900 max-xl:text-Heading03 max-sm:text-BodyMediumды">
            100% Trusted Organic Food Store
          </h1>
          <p className="text-BodyLarge font-regular text-gray-600">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </div>
        <img src="/img/aboutus/aboutus1.png" className="max-2xl:hidden" alt="" />
      
      </div>

      <div className="flex items-center">
        <img src="/img/aboutus/aboutus2.png" className="-ml-[300px] max-2xl:hidden" alt="" />
        <div className="-ml-[100px] max-2xl:ml-0">
          <h1 className="mb-5 w-full text-Heading01 font-semibold text-gray-900 max-xl:text-Heading03 max-sm:text-BodyMedium">
            100% Trusted Organic Food Store
          </h1>
          <p className="mb-6 text-BodyMedium font-medium text-gray-500 ">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.{" "}
          </p>
          <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1  max-2xl:place-items-center">
            {trusted.map((card) => (
              <div className="flex">
                <img
                  className="h-[72px] w-[72px]"
                  src={card.img}
                  alt={card.head}
                />
                <div className="ml-2 mt-2">
                  <p className="text-BodyLarge font-medium text-gray-900">
                    {card.head}
                  </p>
                  <p className="text-BodySmall font-regular text-gray-500">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="mt-[80px] flex items-center max-2xl:justify-center ">
        <div className="w-[40%] max-2xl:w-[80%]">
          <h1 className="mb-6 text-Heading02 font-semibold text-gray-900 max-2xl:text-center max-xl:text-Heading03 max-sm:text-BodyMedium w-full ">
            We Delivered, You <br /> Enjoy Your Order.
          </h1>
          <p className="mb-5 text-BodyMedium font-regular text-gray-600 max-sm:text-BodySmall">
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </p>
          <CheckboxRes className="mb-4 max-sm:hidden" label="Sed in metus pellentesque." />
          <CheckboxRes
            className="mb-4 max-sm:hidden"
            label="Fusce et ex commodo, aliquam nulla efficitur, tempus lorem."
          />
          <CheckboxRes
            className="mb-8 max-sm:hidden"
            label="Maecenas ut nunc fringilla erat varius."
          />
          <Button size="large" variant="fill" icon={true}>
            Shop Now
          </Button>
        </div>
        <img src="/img/aboutus/aboutus3.png" className="-mr-[200px] max-2xl:hidden" alt="" />
      </section>

      <section className="mt-[80px] text-center">
        <h1 className="text-Heading02 font-semibold text-gray-900 max-xl:text-Heading03">
          Our Awesome Team
        </h1>
        <p className="mb-[50px] text-BodyMedium font-regular text-gray-600">
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus <br /> neque. Duis non diam eget est luctus tincidunt
          a a mi.
        </p>
        <div className="flex flex-wrap gap-4">
          {team.map((person) => (
            <div className="group relative overflow-hidden rounded-lg border-[1px] border-gray-100 text-left transition-shadow duration-300 hover:shadow-lg">
              <img src={person.image} alt="" className="block" />
              <p className="pl-4 pt-3 text-BodyLarge font-medium text-gray-900">
                {person.name}
              </p>
              <p className="pb-3 pl-4 text-BodySmall font-regular text-gray-500">
                {person.role}
              </p>

              <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-green-500"
                >
                  <CiFacebook className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-green-500"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-green-500"
                >
                  <FaPinterest className="text-2xl" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-green-500"
                >
                  <FaInstagramSquare className="text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
    </div>
  );
};

export default AboutUs;
