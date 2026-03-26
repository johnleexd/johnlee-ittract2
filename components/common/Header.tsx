"use client"
import { path } from "@/constant/link"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./ButtonToggle";

export function Header() {
  const currentPath = usePathname();
    

  return (
    <header className="fixed top-0 left-0 z-50 h-20 backdrop-blur-lg shadow-sm flex w-full items-center justify-center gap-x-10 px-20">
      <div className="font-extrabold text-3xl">Jumao-as</div>
      <div className="flex-1 flex justify-end font-extrabold items-center text-center px-10 gap-5">
        <ul className="flex gap-4 ">
          {
            path.map( (data, index) => (
              currentPath === data.path ?
              <li key={index} className="underline transition-all scale-110 delay-150 duration-300">
                <Link href={data.path}>
                  {data.name}
                </Link>
              </li>
              :
              <li key={index}>
                <Link href={data.path}>
                  {data.name}
                </Link>
              </li>
            ) )
          }
        </ul>
        <ModeToggle />
      </div>
    </header>
  );
}