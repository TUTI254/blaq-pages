import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";


const Navbar = async () => {
  return (
    <div className=" bg-black ">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image
              src="/next.svg"
              width="100"
              height="100"
              alt="logo"
              priority
            />
          </Link>
          <MainNav />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
