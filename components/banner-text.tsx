import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function BannerText() {
  return (
    <div className="bg-black mt-0 lg:-mt-24 md:-mt-24 px-6 py-4 w-[295px] lg:w-[450px] md:w-[450px] lg:h-28 md:28 flex flex-col  ">
      <h2 className="text-2xl">Blaq Pages World</h2>
      <p className={`${inter.className} text-[8px] lg:text-sm md:text-sm`}>
        Comes and lets explore my life music, entertainment and entrepreneurship
      </p>
    </div>
  );
}
