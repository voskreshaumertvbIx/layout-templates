import React from "react";

const support = [
  {
    src: "/img/support/shipping.png",
    title: "Free Shipping",
    text: "Free shipping on all your order",
  },
  {
    src: "/img/support/support.png",
    title: "Customer Support 24/7",
    text: "Instant access to Support",
  },
  {
    src: "/img/support/payment.png",
    title: "100% Secure Payment",
    text: "We ensure your money is save",
  },
  {
    src: "/img/support/moneyback.png",
    title: "Money-Back Guarantee",
    text: "30 Days Money-Back Guarantee",
  },
];

const Support = () => {
  return (
    <div className="container">
      <section className="m-auto mt-6 flex items-center justify-between flex-wrap  gap-4 rounded-lg bg-white p-4 shadow-2xl  max-sm:flex-col max-lg:max-w-[700px] max-xl:max-w-[1200px]">
        {support.map(({ src, title, text }) => {
          return (
            <div
              className="flex  max-xl:w-[calc(50%-8px)] max-xl:justify-center max-md:space-x-4 items-center space-x-4"
              key={title}
            >
              <img src={src} alt={title} className="h-8 w-8" />
              <div>
                <p className="text-BodyMedium font-semibold">{title}</p>
                <p className="text-BodySmall font-regular text-gray-400">
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Support;
