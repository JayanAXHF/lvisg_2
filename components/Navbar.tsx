"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import "@/app/globals.css";
import Meteors from "./ui/meteor";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

export default function Navbar() {
  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 md:py-10 lg:px-20 lg:py-16">
        {/* <Meteors number={50} /> */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="mr-6 hidden lg:flex" href="#">
              <Image src={"public/logo_green.jpg"} alt="school logo" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Home
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                About
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Services
              </Link>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link className="mr-6 hidden lg:flex" href="#">
          <img
            src={"/logo_green.jpg"}
            alt="school logo"
            className="aspect aspect-auto h-24"
          />
          <span className="sr-only">Lotus Valley International School</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About LVISG</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                    <ListItem title={"About Us"} href={"/about"}>
                      At LVISG, we believe in making future-ready children
                    </ListItem>
                    <ListItem title={"Learning Approach"} href={"/about"}>
                      We believe that a good pedagogy is essential for child
                      growth
                    </ListItem>
                    <ListItem title={"Virtual Tour"} href={"/about"}>
                      Get a full and virtual 360&deg; tour of the school campus
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Events & Programmes
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                    <ListItem title={"Events"} href={"/about"}>
                      A list of the most recent events held at LVISG
                    </ListItem>
                    <ListItem title={"VISTAS"} href={"/about"}>
                      Lotus Valley&apos;s exceptional Career Counselling &
                      University Placement Cell
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Student Content</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                    <ListItem title={"Wall of Fame"} href={"/about"}>
                      A collage of our best-performing students
                    </ListItem>
                    <ListItem
                      title={"I-Card"}
                      href={"https://www.picksindia.com/user/login"}
                    >
                      Click here to upload your photo and details for the I-Card
                    </ListItem>
                    <ListItem title={"Admissions"} href={"/about"}>
                      Information related to the admission progress
                    </ListItem>
                    <ListItem title={"ENTAB Portal"} href={"/about"}>
                      Click here to go to the ENTAB student portal for homework
                      and circulars
                    </ListItem>
                    <ListItem title={"CBSE Circulars"} href={"/about"}>
                      Official circulars sent by CBSE to the school
                    </ListItem>
                    <ListItem title={"CBSE Results"} href={"/about"}>
                      CBSE results for class X &amp; XII board examinations
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>NEP 2020</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                    <ListItem title={"NEP 2020"} href={"/about"}>
                      LVISG marches towards the NEP 2020
                    </ListItem>
                    <ListItem
                      title={"Mandatory Public Disclosure"}
                      href={"https://www.picksindia.com/user/login"}
                    >
                      Certifications, X &amp; XII results and Regulations
                    </ListItem>
                    <ListItem title={"Admissions"} href={"/about"}>
                      Information related to the admission progress
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Meteors />
        </nav>
        {/* <Meteors number={50} /> */}
      </header>
    </>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
