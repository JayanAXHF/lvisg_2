import { Slash, ChevronDown } from "lucide-react";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "./ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const AboutBreadcrum = ({ aboutPage }: { aboutPage: String }) => {
  return (
    <div className="z-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                About
                <ChevronDown className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/about/lvis">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/management">Management</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/partnerships">Partnerships</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/aaa">Awards &amp; Achievements</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/faculty">Faculty</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/staff_details">Staff Details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about/strength">School Strength</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Gallery</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{aboutPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default AboutBreadcrum;
