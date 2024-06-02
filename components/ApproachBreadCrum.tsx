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

const AboutBreadcrum = ({ approachPage }: { approachPage: String }) => {
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
                Learning Approach
                <ChevronDown className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/approach/curriculum">Curriculum</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/approach/management">Management</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/approach/partnerships">Partnerships</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/approach/aaa">Awards &amp; Achievements</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/approach/faculty">Faculty</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/approach/staff_details">Staff Details</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/approach/strength">School Strength</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Gallery</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{approachPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default AboutBreadcrum;
