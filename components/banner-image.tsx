import Image from "next/image";

const BannerImage = async () => {
  return (
    <>
      <div className="static flex justify-center items-center">
        <Image
          src="/hero.svg"
          alt="banner"
          className=" object-contain"
          priority
          width={1651}
          height={743}
        />
      </div>
    </>
  );
};

export default BannerImage;
