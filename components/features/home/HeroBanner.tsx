import { Section } from "@/components/common/Section";
import Image from "next/image";
import { MyImage } from "@/components/common/MyImage"

export function HeroBanner() {
    return(
        <Section>
            <div className="flex gap-5 py-10 flex-col lg:flex-row px-10">
                <div className="flex-2 flex flex-col gap-4 py-10">
                    <h1 className="xl:text-5xl lg:text-3xl text-2xl font-extrabold lg:pl-10 ">Hi, I&apos;m Johnlee Jumao-as</h1>
                    <p className="text-muted-foreground text-lg lg:pl-10 ">I am a passionate developer who creates simple, user-friendly, and responsive projects. My portfolio showcases my skills in design and development, highlighting my ability to turn ideas into functional applications.</p>
                </div>
                <div className="flex justify-center items-center px-10 md:px-20">
                    <MyImage />
                </div>
                
            </div>
        </Section>
    );
}