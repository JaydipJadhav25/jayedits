import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Link from "next/link";


const CustomVideoPlayer = () => {
  return (
    // <div>
    //      <video width="600" controls>
    //   <source src="/videos/current.mp4" type="video/mp4"/>
    //   Your browser does not support the video tag.
    // </video>
    // </div>

    <div className="flex flex-col overflow-hidden">
    <ContainerScroll
      titleComponent={
        <>
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            JayEdits <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
            Edit of the Moment 
            </span>
          </h1>
        </>
      }
    >
      {/* <Image
        src={`/linear.webp`}
        alt="hero"
        height={720}
        width={1400}
        className="mx-auto rounded-2xl object-cover h-full object-left-top"
        draggable={false}
      /> */}

    <Link href={"/"}>
    <video width="1400" controls height="720">
      <source src="/videos/current.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
    </Link>

   

    </ContainerScroll>
  </div>
  )
}

export default CustomVideoPlayer