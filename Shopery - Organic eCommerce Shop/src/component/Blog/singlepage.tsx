import { useParams } from "react-router-dom";
import { blogData } from "./blogData";
import Filters from "./filters";
import { useEffect, useState } from "react";
import Button from "../Reusable component/buttons";
import Comments from "./comments";

const Singlepage = () => {
  const id = useParams<{ id: string }>().id || "";
  const blog = blogData.find((blog) => blog.id === parseInt(id));
  const [imageSize, setImageSize] = useState({ width: "auto", height: "auto" });

  useEffect(() => {
    const img = new Image();
    img.src = "/img/blogImg/forSingle.png";
    img.onload = () => {
      setImageSize({ width: img.width + "px", height: img.height + "px" });
    };
  }, []);

  console.log(blog);

  console.log("Rendering Filters component");

  return (
    <div className="container">
    <div className="mt-12 grid grid-cols-3 gap-12  ">
      <section className="col-span-2 max-xl:col-span-3 max-xl:p-6">
        <img
          src={blog?.image}
          className="h-[600px] w-[872px] rounded-md object-cover max-xl:m-auto max-xl:w-3/4 max-xl:h-[300px]"
          alt={blog?.title}
        />
        <img src="/img/info2.png" className="mb-4 m-auto" alt="" />
        <h1 className="mb-4 text-Heading05 font-medium max-lg:text-BodyXL">{blog?.title}</h1>
        <div className="grid gap-4 text-BodyLarge max-lg:text-BodySmall font-regular text-gray-500">
          <p className="text-BodyXL text-gray-900 max-lg:text-BodyMedium">
            Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat
            dolor at scelerisque imperdiet. Phasellus tristique felis dolor.
          </p>
          <p>
            Maecenas elementum in risus sed condimentum. Duis convallis ante ac
            tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus
            vitae orci at euismod. Integer auctor augue in erat vehicula, quis
            fermentum ex finibus.
          </p>
          <p>
            Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam
            interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices
            lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum
            turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula
            viverra neque, malesuada consectetur diam sapien volutpat risus.
            Quisque eget tortor lobortis, facilisis metus eu, elementum est.
            Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.
          </p>
          <div className="flex gap-6 m-auto max-sm:flex-col
          
          
          ">
            <img src="/img/blogImg/forblog.png" className="max-lg:w-[220px] max-lg:h-[170px]" alt="" />
            <img src="/img/blogImg/forblog2.png" className="max-lg:w-[220px] max-lg:h-[170px]" alt="" />
          </div>
          <p>
            Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis
            vehicula ut, vestibulum ut mauris. Nullam non felis varius dui
            rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed
            luctus. Proin iaculis euismod metus non sollicitudin. Duis vel
            luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh
            ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec
            faucibus ultricies.
          </p>
        </div>
        <div
          className="mt-6 flex items-center  bg-no-repeat max-xl:hidden"
          style={{
            backgroundImage: `url('/img/blogImg/forSingle.png')`,
            width: imageSize.width,
            height: imageSize.height,
          }}
        >
          <div className="mx-12">
            <p className="text-BodyMedium uppercase text-gray-400">
              summer sales
            </p>
            <h1 className="mb-4 text-Heading04 font-semibold text-White">
              Fresh fruit
            </h1>
            <Button size="medium" icon={true} variant="fill">
              Shop Now
            </Button>
          </div>
          <div className="flex h-[90px] w-[90px] flex-col items-center justify-center rounded-[50%] bg-gray-100 bg-opacity-20 text-BodyTiny uppercase text-White">
            <p className="">UP To</p>
            <p className="text-BodyXXL font-semibold text-Warning">56%</p>
            <p>Off</p>
          </div>
        </div>
        <section className="mt-10">
          <h2 className="mb-4 text-BodyXL font-medium">Leave a Comment</h2>

          <div className="flex space-x-4">
            <div className="flex w-1/2 flex-col">
              <label htmlFor="" className="text-BodySmall font-regular">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Zakir Hossen"
                className="h-12 rounded-xl border-[1px] border-gray-100 pl-5"
              />
            </div>
            <div className="flex w-1/2 flex-col">
              <label htmlFor="" className="text-BodySmall font-regular">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="h-12 rounded-xl border-[1px] border-gray-100 pl-5"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="">Message</label>
            <textarea
              placeholder="Write your comment here..."
              className="w-full rounded-xl border-[1px] border-gray-100 pl-5 pt-2 text-BodyMedium font-regular text-gray-600"
              name="message"
              id="mess"
            ></textarea>
          </div>
        </section>
        <Comments />
      </section>

      <div className="col-span-1 max-xl:hidden">
        <Filters />
      </div>
    </div>
    </div>
  );
};

export default Singlepage;
