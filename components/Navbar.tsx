"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { CaretSortIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Meteors } from "./ui/meteor";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { navItems } from "@/data";

import { MenuIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export default function Navbar() {
  const [aboutCollapsible, setAboutCollapsible] =
    React.useState<boolean>(false);
  const [eventCollapsible, setEventCollapsible] =
    React.useState<boolean>(false);
  const [studentCollapsible, setStudentCollapsible] =
    React.useState<boolean>(false);
  const [nepCollapsible, setNepCollapsible] = React.useState<boolean>(false);
  return (
    <>
      <header className="flex absolute z-10 top-0 py-10 w-full shrink-0 items-center px-4 md:px-6 left-0  lg:px-20 overflow-x-hidden lg:hidden !overflow-y-auto">
        <ScrollArea className="!overflow-y-scroll">
          <Sheet>
            <div className="flex items-center w-full justify-between">
              <SheetTrigger asChild>
                <Button className="" size="icon" variant="outline">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <Image
                src={"/logo_green.jpg"}
                alt="school logo"
                className="aspect-auto h-16 hidden"
                width={100}
                height={100}
              />
            </div>
            <SheetContent side="left">
              <Link className="mr-6 lg:hidden " href="#">
                <Image
                  src={"/logo_green.jpg"}
                  alt="school logo"
                  className="aspect aspect-auto h-16"
                  width={100}
                  height={100}
                />
                <span className="sr-only">
                  Lotus Valley International School Gurugram
                </span>
              </Link>

              <div className="lg:hidden gap-6 flex flex-col py-6">
                <Link
                  className="flex items-center justify-between space-x-4 "
                  href="/"
                >
                  <h4 className="text-sm font-semibold">Home</h4>
                </Link>
                {navItems.map((item, index) => {
                  return (
                    <Collapsible
                      key={index}
                      open={
                        index === 0
                          ? aboutCollapsible
                          : index === 1
                          ? eventCollapsible
                          : index === 2
                          ? studentCollapsible
                          : nepCollapsible
                      }
                      onOpenChange={
                        index === 0
                          ? setAboutCollapsible
                          : index === 1
                          ? setEventCollapsible
                          : index === 2
                          ? setStudentCollapsible
                          : setNepCollapsible
                      }
                      className="w-4/5 space-y-2"
                    >
                      <div className="flex items-center justify-between space-x-4 ">
                        <h4 className="text-sm font-semibold">{item.title}</h4>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <CaretSortIcon className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent className="space-y-2 flex flex-col">
                        {item.subItems.map((subItem, index) => {
                          return (
                            <Link
                              className="rounded-md border px-4 py-2  text-sm shadow-sm"
                              key={index}
                              href={subItem.href}
                            >
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </CollapsibleContent>
                    </Collapsible>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </ScrollArea>

        <nav className="ml-auto gap-6">
          <Meteors number={50} className="z-50" />
        </nav>
        <Meteors number={50} />
      </header>
    </>
  );
}
