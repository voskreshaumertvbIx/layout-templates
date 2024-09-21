import Copyright from "./copyright";
import { WhiteLogo } from "../../assets/icons/logo";

const footerLinks = [
  {
    title: "My Account",
    links: ["My Account", "Order History", "Shopping Cart", "Wishlist"],
  },
  {
    title: "Helps",
    links: ["Contact", "Faqs", "Terms & Condition", "Privacy Policy"],
  },
  {
    title: "Proxy",
    links: ["About", "Shop", "Product", "Track Order"],
  },
  {
    title: "Categories",
    links: [
      "Fruit & Vegetables",
      "Meat & Fish",
      "Bread & Bakery",
      "Beauty & Health",
    ],
  },
];

const Footer = () => {
  const contactInfo = {
    phone: "(219) 555-0114",
    email: "Proxy@gmail.com",
  };

  return (
    <div className="bg-black">
      <div className="container">
        <div className="mx-auto mt-[42px] flex justify-between py-8 max-lg:!justify-between max-lg:p-4 max-body:justify-around">
          <div className="mt-8 w-[30%] max-sm:m-auto max-sm:!w-[70%] max-lg:w-[40%]">
            <WhiteLogo className="mb-4 max-sm:m-auto" />
            <p className="mb-5 text-BodySmall text-gray-500 max-sm:text-center">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna
              <br /> congue nec.
            </p>
            <div className="flex space-x-2 text-white max-sm:m-auto max-sm:w-[100%]">
              <a
                href={`tel:${contactInfo.phone}`}
                className="border-b-2 border-Primary text-BodySmall max-sm:!text-BodyTiny"
              >
                {contactInfo.phone}
              </a>
              <span className="text-gray-500">or</span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="border-b-2 border-Primary text-BodySmall max-sm:!text-BodyTiny"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="mt-8 flex space-x-[100px] max-sm:hidden max-body:space-x-[80px]">
            {footerLinks.map((section, index) => (
              <div
                key={index}
                className="max-lg:first-of-type:hidden max-lg:last-of-type:hidden"
              >
                <h4 className="mb-5 text-BodyMedium font-medium text-white">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <a
                        href="#"
                        className="text-BodySmall font-regular text-gray-500 hover:text-White"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
