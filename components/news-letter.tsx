import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const NewsLetter = async () => {
  return (
    <>
      <div className=" px-4 sm:px-6 lg:px-8 flex pt-4 items-center justify-center">
        <input
          type="text"
          className={` ${inter.className} bg-list text-sm w-full lg:w-2/5 md:2/5 py-3 px-4 text-gray-500  focus:outline-none`}
          id="search"
          placeholder="Enter your email here"
        />
        <span className="px-4 py-2 ml-2 bg-menu ">SUBSCRIBE</span>
      </div>
    </>
  );
};

export default NewsLetter;
