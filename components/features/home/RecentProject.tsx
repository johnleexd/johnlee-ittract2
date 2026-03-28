import { Section } from "@/components/common/Section";
import { projectData } from "@/constant/project"
import Link  from "next/link";
import Image  from "next/image";

export function RecentProject() {
    return (
        <Section>
            <div className="container mx-auto w-full">
                <div className="flex justify-center items-center w-full">
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                    <div className="w-fit font-extrabold text-2xl mx-5">RECENT PROJECTS</div>
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 p-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        projectData.slice(0,3).map( (data,index) => (
                            <Link href={data.link} key={index} target="_blank" className="items-center flex justify-center">
                                <div className="group relative w-80 size-auto aspect-square ">
                                    <Image 
                                        src={data.imageLink}
                                        alt="project image"
                                        loading="eager"
                                        fill
                                        className="object-cover transition-all duration-2s lg:group-hover:blur-none blur-none md:blur-sm delay-500 ease-in-out"
                                    />
                                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold text-xl text-red-500 w-full text-center lg:group-hover:hidden transition-all duration-2s h-ful items-center flex justify-center delay-500 ease-in-out hidden lg:flex">{data.title}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                </div>
            </div>
        </Section>
    );
}