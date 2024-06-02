"use client";
import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  ProductItem,
  HoveredLink,
} from "@/components/ui/aceternity-nav-menu";
import { cn } from "@/utils/cn";
import { navItems } from "@/data";

export default function LgNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-10 mx-auto w-max max-w-3xl *:z-50",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>{" "}
        {navItems.map((item, index) => {
          return (
            <MenuItem
              key={index}
              setActive={setActive}
              active={active}
              item={item.title}
            >
              <div className="z-50 grid grid-cols-2 gap-10 p-4 text-sm *:z-50">
                {item.subItems.map((subItem, index) => {
                  return (
                    <ProductItem
                      title={subItem.name
                        .replace("&amp;", "&")
                        .replace("&apos;", "'")}
                      key={index}
                      href={subItem.href}
                      description={subItem.description}
                    />
                  );
                })}
              </div>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
