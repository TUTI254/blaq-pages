import Image from "next/image";

const SocialSection = () => {
  return (
    <div className="mx-6 flex lg:absolute lg:right-10 items-center space-x-4 lg:space-x-6">
      <Image
        src="/soundcloud.svg"
        className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg-h-6"
        width="25"
        height="25"
        alt="social-icon"
        priority
      />
      <Image
        src="/tidal.svg"
        className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg-h-6 "
        width="25"
        height="25"
        alt="social-icon"
        priority
      />
      <Image
        src="/spotify.svg"
        className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg-h-6"
        width="25"
        height="25"
        alt="social-icon"
        priority
      />
      <Image
        src="/instagram.svg"
        className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg-h-6"
        width="25"
        height="25"
        alt="social-icon"
        priority
      />
      <Image
        src="/twitter.svg"
        className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg-h-6"
        width="25"
        height="25"
        alt="social-icon"
        priority
      />
      <Image
        src="/tiktok.svg"
        className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg-h-6"
        width="25"
        height="25"
        alt="social-icon"
        priority
      />
      <Image
        src="/pintrest.svg"
        className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg-h-6"
        width="25"
        height="25"
        alt="social-icon"
        priority
      />
    </div>
  );
};

export default SocialSection;
