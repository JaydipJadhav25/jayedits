import React from 'react'
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/ui/Spotlight";
import { Cover } from "@/components/ui/cover";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Button } from "../components/ui/moving-border";
import Link from 'next/link';


const words = " Transform your footage into cinematic experiences with JayEdits. Where creativity meets craftsmanship, and every detail matters.";

const HeroSection = () => {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="red"
        />
        <Spotlight
          className="-top-40 left-0 md:left-80 md:-top-40"
          fill="white"
        />
    <div className="p-4 relative z-10 w-full text-center" >
            {/* <h1 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
             <br/>
        </h1> */}
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        {/* <h1 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"> */}
        <Cover>JayEdits</Cover> 
      </h1>
      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
      Elevating Visual Storytelling
        </h1>
        {/* <p
        className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        > */}
               
             <div className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto font-light">

      <TextGenerateEffect words={words} />
             </div>
            {/* </p> */}

         
        </div>         
        
   
        
        <BackgroundBeams />

    </div>
  )
}

export default HeroSection