import React from "react";
import ListIcon from "../../assets/icons/listIcon";
import { ROUTES } from "../../routes/routes";

const nav_links = [
  { name: "Home", route: "/" },
  { name: "About", route: "/about" },
  { name: "Shop", route: ROUTES.categories },
  { name: "Blog", route: ROUTES.blog },
  { name: "About us", route: ROUTES.aboutus },
  { name: "Contact us", route: ROUTES.contactus },
];

const Navbar: React.FC = () => {
  return (
    <div style={{ width: 1920 }} className="-ml-[300px]">
      <div className="h-16 w-full bg-gray-900">
        <nav className="container mx-auto flex h-full w-[1320px] items-center justify-between">
          <div className="flex">
            {nav_links.map((link, index) => (
              <a
                key={index}
                href={link.route}
                className="mr-8 flex items-center text-BodySmall text-gray-400 hover:text-White"
              >
                <div className="flex items-center">
                  <span className="mr-1">{link.name}</span>
                  {index < 4 && <ListIcon />}
                </div>
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <img src="/img/icon/phone.png" alt="phone" className="mr-2" />
            <p className="text-BodySmall font-medium text-White">
              (219) 555-0114
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
