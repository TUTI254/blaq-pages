"use client";

import { cn } from "@/lib/utils";
import { NavLinks } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const MainNav = () => {
  const pathname = usePathname();
  const routes = NavLinks.map((route) => ({
    href: route.href,
    label: route.label,
    active: pathname === route.href,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "hidden lg:block md:block text-lg text-white  uppercase transition-colors hover:text-nav",
            route.active ? "text-nav" : "text-white"
          )}
        >
          {route.label}
        </Link>
      ))}

      <Sheet>
        <SheetTrigger asChild>
          <AlignJustify className="text-white w-6 h-6 block lg:hidden md:hidden " />
        </SheetTrigger>
        <SheetContent className="bg-menu h-auto" side="top">
          <SheetHeader>
            <SheetTitle
              className={` ${inter.className} text-left text-xs text-white italic`}
            >
              Menu
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          <span className="flex flex-col">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-lg text-white uppercase transition-colors hover:underline hover:decoration-black hover:underline-offset-2 ",
                  route.active
                    ? "underline underline-offset-2 decoration-black"
                    : "no-underline"
                )}
              >
                {route.label}
              </Link>
            ))}
          </span>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MainNav;
