import { news } from "./news";

const LatestNews = () => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-8 mt-[60px] text-center text-Heading05 font-semibold text-gray-900">
        Latest News
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {news.map(({ img, date, month, text }, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img src={img} alt="" className="w-full" />
            <div className="p-4">
              <div className="absolute left-[5%] top-[45%] flex h-[58px] w-[58px] flex-col items-center justify-center rounded-lg bg-white opacity-[80%]">
                <span>{date}</span>
                <span>{month}</span>
              </div>
              <img src="img/Info.png" className="mt-6" alt="" />
              <p className="mb-5 mt-2 text-BodyLarge font-medium text-gray-900">
                {text}
              </p>
              <div className="flex items-center space-x-3">
                <a href="" className="text-BodyMedium font-medium text-Primary">
                  Read More
                </a>
                <img
                  className="w-[15px]"
                  src="/img/icon/Group.svg"
                  alt="View All Icon"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
