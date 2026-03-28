import { Section } from "@/components/common/Section";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactSection(){
    return(
        <Section>
            <div className="container mx-auto flex gap-y-10 md:flex-row md:gap-x-10 flex-col">
                <div className="flex-1 flex flex-col p-10 gap-5 border rounded-lg">
                    <h1 className="font-extrabold text-2xl">Contact Form</h1>
                    <input type="text" placeholder="Name" className="border border-slate-200 h-10 rounded-lg px-2"/>
                    <input type="text" placeholder="Email" className="border border-slate-200 h-10 rounded-lg px-2"/>
                    <Textarea placeholder="Message..." />
                    <Button>
                        Send Message
                    </Button>
                </div>
                <div className="flex-1 flex flex-col p-10 gap-5 border rounded-lg">
                    <h1 className="font-extrabold text-2xl">Contact info</h1>
                     <div className="font-bold">Email: <Link href="mailto:johnlyjazzman@gmail.com" className="hover:underline">johnlyjazzman@gmail.com</Link></div>
                     <div className="font-bold">Phone: 09923880546<p></p></div>
                     <div className="font-bold">Social Links: <p></p></div>
                </div>
            </div>
        </Section>
    );
}