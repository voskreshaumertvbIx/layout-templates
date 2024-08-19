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
    <section className="mt-6 flex h-[128px] justify-between rounded-lg bg-white p-4 shadow-2xl">
      {support.map(({ src, title, text }) => {
        return (
          <div className="flex items-center space-x-4" key={title}>
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
  );
};

export default Support;
