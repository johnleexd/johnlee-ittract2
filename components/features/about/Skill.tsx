import { Section } from "@/components/common/Section"
import { Button } from "@/components/ui/button"
import { skillData } from "@/constant/Skill"

export function Skill()
{
    return(
        <Section>
            <div className="flex container mx-auto flex-col gap-5 ">
                <div className="flex justify-center items-center w-full">
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                    <div className="w-fit font-extrabold text-2xl mx-5">SKILL</div>
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                </div>
                <div className="flex flex-col md:flex-row text-center items-center gap-2">
                    <div className="flex-1 flex flex-col justify-between w-full">
                        <h1 className="font-extrabold text-3xl flex-1">SKILLS LIST</h1>
                        <ul className="flex flex-col gap-y-2 flex-1">
                            {
                                skillData.map( (data,index) => (
                                    <li key={index} className="">
                                        {data.skill}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex-1 flex flex-col justify-end">
                        <h1 className="font-extrabold text-3xl flex-1" >Experiesnce/info</h1>
                        <p className="text-muted-foreground flex-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis asperiores non natus, id optio officiis veniam laborum minus aliquid. Iusto sapiente nobis officiis tempora maxime dolore reiciendis tempore suscipit dolorum.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full">
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <Button className="h-12 rounded-full px-10">
                        Download Resume
                    </Button>
                </div>
            </div>
        </Section>
    );
}