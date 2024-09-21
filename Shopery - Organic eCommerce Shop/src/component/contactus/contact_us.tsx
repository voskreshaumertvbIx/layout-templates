import Button from "../Reusable component/buttons";

const ContactUs = () => {
  return (
    <div className="container">
      <section className="flex max-md:flex-col gap-12  p-12 max-md:p-4">
        <div className="flex flex-col space-y-8 rounded-lg bg-white p-6 max-md:p-2 shadow-md max-md:!w-[100%]">
          <div className="flex flex-col items-center border-b-[1px] border-gray-100 text-center">
            <img
              src="/img/MapPin.svg"
              className="h-[51px] w-[51px]"
              alt="Location"
            />
            <p className="mb-4 mt-4 text-gray-600">
              2715 Ash Dr. San Jose, South <br /> Dakota 83475
            </p>
          </div>
          <div className="flex flex-col items-center border-b-[1px] border-gray-100 text-center">
            <img
              src="/img/Email.svg"
              className="h-[51px] w-[51px]"
              alt="Email"
            />
            <p className="mt-4 text-gray-600">Proxy@gmail.com</p>
            <p className="mb-4 text-gray-600">Help.proxy@gmail.com</p>
          </div>
          <div className="flex flex-col items-center border-b-[1px] border-gray-100 text-center">
            <img
              src="/img/PhoneCall.svg"
              className="h-[51px] w-[51px]"
              alt="Phone"
            />
            <p className="mt-4 text-gray-600">(219) 555-0114</p>
            <p className="mb-4 text-gray-600">(164) 333-0487</p>
          </div>
        </div>
        <div className="col-span-2 rounded-lg bg-white p-[50px] shadow-md max-md:p-8">
          <h1 className="mb-6 text-2xl font-semibold">Just Say Hello!</h1>
          <p className="mb-8 text-gray-500 max-md:text-BodySmall">
            Do you fancy saying hi to me or you want to get started with your
            project and you need my help? Feel free to contact me.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1 max-sm:text-BodySmall">
              <input
                type="text"
                placeholder="Template Cookie"
                className="h-12 w-full rounded-md border-[1px] border-gray-300 p-4 focus:outline-none"
              />
              <input
                type="email"
                placeholder="zakirsoft@gmail.com"
                className="h-12 w-full rounded-md border-[1px] border-gray-300 p-4 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Hello!"
              className="h-12 w-full rounded-md border-[1px] border-Primary p-4 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subjects"
              className="h-12 w-full rounded-md border-[1px] border-gray-300 p-4 focus:outline-none"
            />
            <Button size="medium">Send Message</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
