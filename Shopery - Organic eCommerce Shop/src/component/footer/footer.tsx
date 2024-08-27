import Copyright from "../copyrightSection/copyright";
import { WhiteLogo } from "../icons/Logo/logo";

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
    <div style={{ width: "1920px" }} className="-ml-[300px] bg-gray-900">
      <div className="mx-auto flex w-[1320px] justify-between mt-[42px]  py-8">
        <div className="w-[30%] mt-8">
          <WhiteLogo className="mb-4 " />
          <p className="mb-5 text-BodySmall text-gray-500">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna<br/> congue nec.
          </p>
          <div className="flex space-x-2 text-white ">
            <a
              href={`tel:${contactInfo.phone}`}
              className="border-b-2 border-Primary text-BodySmall"
            >
              {contactInfo.phone}
            </a>
            <span className="text-gray-500">or</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="border-b-2 border-Primary text-BodySmall"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

        <div className="flex space-x-[100px] mt-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
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
      <Copyright/>
    </div>
  );
};

export default Footer;
