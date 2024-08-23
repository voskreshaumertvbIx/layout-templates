import { CiInstagram } from "react-icons/ci";

const InstagramGallery = () => {
  const images = [
    'img/inst/11.png',
    'img/inst/22.png',
    'img/inst/33.png',
    'img/inst/44.png',
    'img/inst/55.png',
    'img/inst/66.png',
  ];

  return (
    <div className="flex flex-col justify-center gap-4 mt-4">
      <div>
      <h1 className='text-Heading05 text-gray-900 font-semibold text-center'>Follow us on Instagram</h1>
      </div>
      <div className='flex justify-center gap-6'>
      {images.map((src, index) => (
        <div key={index} className="relative  rounded-lg overflow-hidden group">
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-green-600 bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-lg">
          <CiInstagram className="w-[30px] h-[30px]"/>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default InstagramGallery;
