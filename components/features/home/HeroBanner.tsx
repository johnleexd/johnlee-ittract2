import { Section } from "@/components/common/Section";
import Image from "next/image";

export function HeroBanner() {
    return(
        <Section>
            <div className="flex gap-5">
                <div className="flex-2 flex flex-col gap-4 py-10">
                    <h1 className="text-5xl font-extrabold pl-20">Hi, I&apos;m Johnlee Jumao-as</h1>
                    <p className="text-muted-foreground text-lg  pl-20">I am a passionate developer who creates simple, user-friendly, and responsive projects. My portfolio showcases my skills in design and development, highlighting my ability to turn ideas into functional applications.</p>
                </div>

                <div className="relative aspect-square w-10 flex-1 shadow-lg border-2 border-red-500 rounded-sm hover:border-white">
                    <Image
                        src="/myprofile.jpg"
                        alt="my profile"
                        loading="eager"
                        fill
                        className="object-cover grayscale hover:grayscale-0 rounded-lg rotate-8 hover:rotate-0 transition-all duration-500 delay-100"
                    />
                </div>
            </div>
        </Section>
    );
}