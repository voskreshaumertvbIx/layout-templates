import React, { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Закрыть меню при клике на ссылку
  };

  return (
    <div className="max-w-[1980px] bg-gray-900">
      <div className="container h-16">
        <nav className="mx-auto flex h-full items-center justify-between max-body:justify-around max-md:mt-12">
          
          {/* Бургер-меню для мобильных устройств */}
          <div className="hidden max-sm:flex items-center">
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Мобильное меню */}
          {isMenuOpen && (
            <div className="flex flex-col absolute top-16 left-0 w-full bg-gray-900 p-4 z-[1000] max-sm:block">
              {nav_links.map((link, index) => (
                <a
                  key={index}
                  href={link.route}
                  className="block text-BodySmall text-gray-400 hover:text-white text-center m-1"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

         
          <div className="flex max-md:text-BodyTiny max-sm:hidden">
            {nav_links.map((link, index) => (
              <a
                key={index}
                href={link.route}
                className="mr-8 flex items-center text-BodySmall text-gray-400 hover:text-white max-md:mr-4"
              >
                <span className="mr-1">{link.name}</span>
                {index < 4 && (
                  <div className="max-md:hidden">
                    <ListIcon />
                  </div>
                )}
              </a>
            ))}
          </div>

        
          <div className="flex items-center">
            <img src="/img/icon/phone.png" alt="phone" className="mr-2" />
            <p className="text-BodySmall font-medium text-white">
              (219) 555-0114
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
