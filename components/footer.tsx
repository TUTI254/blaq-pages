import Link from "next/link";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className={`mt-10 ${inter.className}`}>
      <div className="flex flex-col space-y-6 ml-8 md:flex-row lg:flex-row md:justify-between lg:justify-between md:items-center lg:items-center">
        <Link href="/" className=" flex lg:ml-12 md:ml-12">
          <Image src="/logo.svg" width="70" height="70" alt="logo" priority />
        </Link>

        <div className="flex-col">
          <h3 className="font-semibold uppercase">Shop</h3>
          <p>Contact us</p>
          <span className="flex space-x-2">
            <p>Follow us</p>
            <Image
              src="/instagram.svg"
              className="w-5 h-5"
              width="25"
              height="25"
              alt="social-icon"
              priority
            />
            <Image
              src="/twitter.svg"
              className="w-5 h-5 "
              width="25"
              height="25"
              alt="social-icon"
              priority
            />
            <Image
              src="/tiktok.svg"
              className="w-5 h-5"
              width="25"
              height="25"
              alt="social-icon"
              priority
            />
            <Image
              src="/pintrest.svg"
              className="w-5 h-5"
              width="25"
              height="25"
              alt="social-icon"
              priority
            />
          </span>
          <p>About</p>
        </div>
        <div className="flex-col">
          <h3 className="font-semibold uppercase">Company</h3>
          <p>Privacy Policy</p>
          <p>Terms of Conditions</p>
          <p>Shipping & Return policy</p>
        </div>
        <div className="flex-col pb-6 lg:pb-3 md:-scroll-pb-3 lg:mr-16 md:mr-16">
          <h3 className="font-semibold uppercase">Payment Method</h3>
          <span className="flex space-x-2">
            <Image
              src="/mastercard.svg"
              className="w-5 h-5"
              width="25"
              height="25"
              alt="payment-icon"
              priority
            />
            <Image
              src="/visa.svg"
              className="w-5 h-5 "
              width="25"
              height="25"
              alt="payment-icon"
              priority
            />
            <Image
              src="/discover.svg"
              className="w-5 h-5"
              width="25"
              height="25"
              alt="payment-icon"
              priority
            />
            <Image
              src="/applepay.svg"
              className="w-5 h-5"
              width="25"
              height="25"
              alt="payment-icon"
              priority
            />
          </span>
        </div>
      </div>
      <div className="mx-auto mt-10 border-t w-3/4 border-gray-500">
        <p className="text-xs text-center  p-4 uppercase">
          &copy; 2023 blaq Pages| Powered by powershop.link
        </p>
      </div>
    </footer>
  );
};

export default Footer;
