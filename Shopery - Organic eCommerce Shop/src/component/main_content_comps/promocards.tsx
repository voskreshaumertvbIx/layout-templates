import Badge from "../Reusable component/badge";
import Button from "../Reusable component/buttons";

const Promocards = () => {
  return (
    <div className="container">
      <section className="max-body:flex max-body:flex-col max-body:items-center mt-12 grid grid-cols-3 gap-2">
        <div className=" col-span-2 flex max-h-[600px] min-h-[500px] w-full max-w-[872px] items-center bg-[url('/img/promocards/main.png')] bg-cover bg-center text-White max-md:min-h-[200px] max-md:max-w-[500px]  max-lg:min-h-[400px] max-lg:w-[600px] max-sm:w-[355px!important]">
          <section className="ml-[60px] max-md:ml-[10px] max-md:text-BodyLarge">
            <h1 className="text-Heading02 max-md:text-Heading05 ">
              Fresh & Healthy <br /> Organic Food
            </h1>
            <div className="border-l-[2px] border-SoftPrimary pl-3 max-md:mt-2">
              <p className="mb-2 text-BodyXL font-medium max-md:text-BodyMedium">
                Sale up to <Badge variant="new" className="max-md:text-BodySmall
                ">30% OFF</Badge>{" "}
              </p>
              <p className="text-BodySmall font-regular">
                Free shipping on all your order.
              </p>
            </div>
            <Button
              className="mt-[26px] w-[193px] bg-White"
              variant="border"
              icon={true}
            >
              Shop now
            </Button>
          </section>
        </div>

        <section className="max-body:flex max-body:gap-5">
          <div className="mb-6 flex h-[288px] w-[423px] flex-col justify-start bg-[url('/img/promocards/submain1.png')] bg-cover bg-center p-4 text-gray-900 max-lg:hidden">
            <h2 className="text-BodySmall font-medium uppercase">
              summer sale
            </h2>
            <p className="text-Heading05 font-semibold uppercase">75% off</p>
            <p className="text-BodySmall font-regular text-gray-600">
              Only Fruit & Vegetable
            </p>
            <Button className="-ml-6 mt-4" variant="border" icon={true}>
              Shop now
            </Button>
          </div>

          <div className="flex h-[288px] w-[423px] flex-col items-center justify-center bg-[url('/img/promocards/submain2.png')] bg-cover bg-center p-4 text-white max-lg:hidden">
            <p className="text-BodySmall font-medium uppercase">Best Deal</p>
            <h2 className="text-Heading05 font-semibold">
              Special Products <br /> Deal of the Month
            </h2>
            <Button variant="border" icon={true}>
              Shop now
            </Button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Promocards;
