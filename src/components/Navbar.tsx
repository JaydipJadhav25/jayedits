"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Jayedits from "./Jayedits";

const Nabar = ({ className }: { className?: string }) => {

    const [active, setActive] = useState<string | null>(null);
  
    return (
      <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
          <Menu setActive={setActive}>
              <Link href={"/"}>
              <MenuItem setActive={setActive} active={active} item="Home">
              </MenuItem>
              
              </Link>
              <Link href="#features">
              <MenuItem setActive={setActive} active={active} item="Features"></MenuItem>
              
              </Link>

              <Link href="#about">
              <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
              
              </Link>
              
              <MenuItem
              setActive={setActive} active={active} item="Our services"
              >
                 <div className="flex flex-col space-y-4 text-sm">
                 <HoveredLink href="/services">Services</HoveredLink>
              <HoveredLink href="/services">
              Cinematic Editing
              </HoveredLink>
              <HoveredLink href="/services">
              Basic Editing
              </HoveredLink>
              <HoveredLink href="/services">Social Media Content</HoveredLink>
              <HoveredLink href="/services">
              Photos & Video Editing
              </HoveredLink>
                 </div>
              </MenuItem>
              <Link href={"/contact"}>
              <MenuItem setActive={setActive} active={active} item="Contact Us">
        
              </MenuItem>
              </Link>
          </Menu>
      </div>
    )
  }
  
  export default Nabar;
  