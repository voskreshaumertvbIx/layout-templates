import React, { useEffect, useState } from "react";
import InputField from "../Reusable component/input";
import Button from "../Reusable component/buttons";

const PopupModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative flex w-[56%] rounded-lg bg-white p-6 shadow-lg  max-md:!w-[365px] max-md:p-2 max-2xl:w-[670px]">
            <img
              src="/img/BG.png"
              className="max-md:hidden max-2xl:w-[300px]"
              alt=""
            />
            <div className="flex w-full flex-col items-center justify-center">
              <img
                src="img/Close.png"
                alt="Close"
                className="absolute right-4 top-4 cursor-pointer"
                onClick={handleClose}
              />
              <h2 className="mb-4 text-center text-Heading03 font-bold max-2xl:text-BodyXL">
                Subscribe to Our <br />
                Newsletter
              </h2>
              <p className="mb-4 text-center text-BodyMedium font-regular text-gray-400 max-2xl:text-BodySmall">
                Subscribe to our newsletter and save your{" "}
                <span className="font-bold text-Warning">20% <br className="max-2xl:hidden"/> money</span> with
                discount code today.
              </p>
              <div className="flex items-center">
                <InputField
                  className="h-[45px] w-[343px] flex-grow rounded-l-full border border-gray-300 px-4 py-2 focus:outline-none max-2xl:w-[200px]"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Button
                  variant="fill"
                  className="z-20 -ml-5 rounded-full px-6 font-semibold text-white focus:outline-none"
                >
                  Subscribe
                </Button>
              </div>
              <div className="mt-[60px] text-gray-400">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 text-BodySmall font-regular"
                  />
                  Do not show this window
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;
