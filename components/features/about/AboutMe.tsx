import { Section } from "@/components/common/Section"
import { MyImage } from "@/components/common/MyImage"

export function AboutMe(){
    return(
        <Section>
             <div className="flex gap-5 py-10 flex-col-reverse lg:flex-row items-center justify-center">
                <div className="flex justify-center items-center px-10 md:px-20">
                    <MyImage />
                </div>
                <div className="flex-2 flex flex-col gap-4 py-10">
                    <h1 className="text-5xl font-extrabold lg:pl-10 ">ABOUT ME</h1>
                    <p className="text-muted-foreground text-lg  lg:pl-10">I am a 3rd-year Bachelor of Science in Information Technology (BSIT) student with a strong interest in web development and software design. I am passionate about building user-friendly and efficient digital solutions, and I continuously improve my skills in programming, UI/UX design, and system development. I am eager to learn new technologies and gain real-world experience to grow as an IT professional.</p>
                </div>
            </div>
        </Section>
    );
}