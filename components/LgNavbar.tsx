"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/aceternity-nav-menu";
import { cn } from "@/utils/cn";
import { navItems } from "@/data";

export default function LgNavbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed  w-max *:z-50  top-10 inset-x-0 max-w-3xl mx-auto ",
        className
      )}
    >
      <Menu setActive={setActive}>
        {navItems.map((item, index) => {
          return (
            <MenuItem
              key={index}
              setActive={setActive}
              active={active}
              item={item.title}
            >
              <div className="text-sm grid grid-cols-2 gap-10 p-4 z-50 *:z-50">
                {item.subItems.map((subItem, index) => {
                  return (
                    <ProductItem
                      title={subItem.name
                        .replace("&amp;", "&")
                        .replace("&apos;", "'")}
                      key={index}
                      href="/asdas"
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
