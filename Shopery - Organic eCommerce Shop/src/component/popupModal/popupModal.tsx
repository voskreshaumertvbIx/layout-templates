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
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative flex w-1/2 rounded-lg bg-white p-6 shadow-lg">
            <img src="/img/BG.png" alt="" />
            <div className="flex w-full flex-col items-center justify-center">
              <img
                src="img/Close.png"
                alt="Close"
                className="absolute right-4 top-4 cursor-pointer"
                onClick={handleClose}
              />
              <h2 className="mb-4 text-center text-Heading03 font-bold">
                Subscribe to Our Newsletter
              </h2>
              <p className="mb-4 text-BodyMedium font-regular text-gray-400">
                Subscribe to our newsletter and save your{" "}
                <span className="font-bold text-Warning">
                  20% <br />
                  money
                </span>{" "}
                with discount code today.
              </p>
              <div className="flex items-center">
                <InputField
                  className="h-[45px] w-[343px] flex-grow rounded-l-full border border-gray-300 px-4 py-2 focus:outline-none"
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
    </>
  );
};

export default PopupModal;
