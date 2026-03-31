import Image from "next/image"

export function MyImage() {
        
    return (
        <div className="relative aspect-square w-80 items-center flex justify-center flex-1 shadow-lg border-2 border-red-500 rounded-sm hover:border-white md:animation-none">
            <Image
                src="/myprofile.jpg"
                alt="my profile"
                loading="eager"
                fill
                className="object-cover grayscale hover:grayscale-0 rounded-lg rotate-8 hover:rotate-0 transition-all duration-500 delay-100"
            />  
        </div>
    );
}