// "use client";
import React from "react";
import { Meteors } from "../../components/ui/meteors";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";





interface LabelInputContainerProps {
  className?: string;
  children: React.ReactNode;
}

const LabelInputContainer: React.FC<LabelInputContainerProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);



const words = "A third-year engineering student with hands-on experience in full-stack web development. currently honing skills through internships in website design and development.";


 function MeteorsDemo() {
  return (
    // <div className="min-h-screen bg-black py-12 pt-36">
     <div className=" min-h-screen relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden flex flex-col justify-center items-center">
     {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500"> */}

     {/* <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black opacity-50 my-4"> */}
      {/* <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Contact
      </h2> */}
    
{/*           
       <form action="" className="my-7">
       <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>

            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
     
          <LabelInputContainer>

            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
         
          </LabelInputContainer>
        
        </div>  

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          
        </button>
        
     
      </form>    */}

                <div className="my-36">
                     
<LabelInputContainer>

<Label htmlFor="firstname">First name</Label>
<Input id="firstname" placeholder="Tyler" type="text" />
</LabelInputContainer>

<LabelInputContainer>

<Label htmlFor="lastname">Last name</Label>
<Input id="lastname" placeholder="Durden" type="text" />

</LabelInputContainer>

<LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
        </button>     
     
       </div>
   
       



          <Meteors number={60} />

          
      {/* </div> */}
       </div>
        //  </div>
   
  );
}

export default MeteorsDemo;