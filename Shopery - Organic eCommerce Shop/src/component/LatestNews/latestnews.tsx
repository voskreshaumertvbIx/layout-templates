import { news } from "./news";

const LatestNews = () => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-8 mt-[60px] text-Heading05 text-gray-900 font-semibold text-center">Latest News</h1>
      <div className="grid grid-cols-3 gap-6">
        {news.map(({ img, date, month, text }, index) => (
          <div key={index} className="relative shadow-lg rounded-lg overflow-hidden">
            <img src={img} alt="" className="w-full" />
            <div className="p-4">
              <div className="absolute top-[45%] left-[5%] flex h-[58px] w-[58px] flex-col items-center justify-center rounded-lg bg-white opacity-[80%]">
                <span>{date}</span>
                <span>{month}</span>
              </div>
              <img src="img/Info.png" className="mt-6" alt="" />
              <p className="text-gray-900 text-BodyLarge font-medium mt-2 mb-5">{text}</p>
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
