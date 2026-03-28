"use client"
import { path } from "@/constant/link"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./ButtonToggle";
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const currentPath = usePathname();
  const [ isOpen , setIsOpen ] = useState(false)  

  return (
    <header className="fixed top-0 left-0 z-50 h-20 backdrop-blur-lg shadow-sm flex w-full items-center justify-center gap-x-10 px-20">
      <div className="font-extrabold text-xl md:text-2xl  flex justify-start w-fit flex-1">Jumao-as</div>
      <div className="flex lg:hidden justify-end flex-1">
        {
          isOpen ? (
            <X onClick={ () => setIsOpen(false) }/>
          ) : (
            <Menu onClick={ () => setIsOpen(true) }/>
          ) 
        }
      </div>
      <div className={`fixed top-20 z-40 transition-all duration-1000 transform w-full ${isOpen ? "translate-y-0 opacity-100": "-translate-y-5 opacity-0 pointer-events-none"} backdrop-blur-lg bg-gray-50/90`}>
        <ul className="flex flex-col gap-7 items-center justify-center font-bold py-2">
          {
            path.map( (data, index) => (
              currentPath === data.path ?
              <li key={index} className="underline transition-all scale-115 delay-150 duration-300">
                <Link href={data.path} onClick={ () => setIsOpen(false) } >
                  {data.name}
                </Link>
              </li>
              :
              <li key={index}>
                <Link href={data.path} onClick={ () => setIsOpen(false) }>
                  {data.name}
                </Link>
              </li>
            ) )
          }
        </ul>
      </div>
      <div className="flex-1 hidden lg:flex flex justify-end font-extrabold items-center text-center px-10 gap-5">
        <ul className="flex gap-7">
          {
            path.map( (data, index) => (
              currentPath === data.path ?
              <li key={index} className="underline transition-all scale-115 delay-150 duration-300">
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