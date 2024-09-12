import { CiInstagram } from "react-icons/ci";

const InstagramGallery = () => {
  const images = [
    "img/inst/11.png",
    "img/inst/22.png",
    "img/inst/33.png",
    "img/inst/44.png",
    "img/inst/55.png",
    "img/inst/66.png",
  ];

  return (
    <div className="mt-4 flex flex-col justify-center gap-4">
      <div>
        <h1 className="text-center text-Heading05 font-semibold text-gray-900">
          Follow us on Instagram
        </h1>
      </div>
      <div className="flex justify-center gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-green-600 bg-opacity-60 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <CiInstagram className="h-[30px] w-[30px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramGallery;
