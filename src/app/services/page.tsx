"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  
} from "@tabler/icons-react";
import { TypewriterEffect } from "../../components/ui/typewriter-effect";
// import { BackgroundBeams } from "../../components/ui/background-beamss";
import { HeroHighlight, Highlight  } from "../../components/ui/hero-highlight";
import { motion } from "framer-motion";

function page() {
  const features =[
    {
      "title": "Basic Editing",
      "description": "Simple cuts, transitions, and basic color correction.",

      "icon": "$50"
    },
    {
      "title": "Cinematic Editing",
      "description": "Advanced editing with visual effects, color grading, and sound design.",

      "icon": "$150"
    },
    {
      "title": "Social Media Video Editing",
      "description": "Editing optimized for platforms like Instagram, TikTok, and YouTube.",
      "icon": "$70"
    },
    {
      "title": "Wedding Video Editing",
      "description": "Professional editing for wedding videos, including music overlay and special effects.",
      "icon": "$200"
    },
    {
      "title": "Corporate Video Editing",
      "description": "Editing services for corporate events, promotional videos, and presentations.",

      "icon": "$120"
    },
    {
      "title": "Music Video Editing",
      "description": "Dynamic and creative editing for music videos.",

      "icon": "$180"
    },
    {
      "title": "Event Highlight Editing",
      "description": "Highlight reel creation for events, focusing on key moments.",

      "icon": "$90"
    },
    {
      "title": "Photo & Video Montage",
      "description": "Combining photos and videos into a seamless, memorable montage.",

      "icon": "$100"
    }
  ]
  
  const words = [
    { "text": "Expert" },
    { "text": "Video", "className": "text-blue-500 dark:text-blue-500" },
    { "text": "Editing", "className": "text-blue-500 dark:text-blue-500" },
    { "text": "Services" },
    { "text": "Tailored" },
    { "text": "for" },
    { "text": "Your" },
    { "text": "Vision" }
  ]
  
  return (
    <div  className="min-h-screen relative shadow-xl bg-gray-900 border border-gray-800  px-5 py-24 h-full gap-1">
  
    
      <h1 className="text-2xl md:text-3xl font-normal text-white text-center mt-10">
      <TypewriterEffect words={words}/>
</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-11 max-w-7xl mx-auto mt-2">
      {features.map((feature, index) => (
       <Link href={"/"} key={feature.title}>
        <Feature key={feature.title} {...feature} index={index} />
       </Link>
      ))}
      </div>

    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
  
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>

  );
};

export default page;