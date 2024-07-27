'use client';
import Image from "next/image";
import Logo from "../../public/Assets/Logo/logo.png"
import { useState } from "react";


export default function main() {
  return(
    Navigation(),
    home()
  )
}




function Navigation() {
  const [open, isOpen] = useState(false);
  return (
    <nav className="bg-slate-50">
      <div className="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">
        <Image src={Logo} width={50} height={50} alt="logo"/>
        {open?(
          <div className="md:hidden">
              <ul className={open ? "z-50 flex flex-col gap-10 w-3/5 fixed right-0 top-0 bottom-0 h-90 px-4 font-semibold bg-slate-800 pt-10" : "hidden"}>
              <li>
              <button onClick={(e) => isOpen(!open)} className="md:hidden -space-y-1 absolute left-0 top-0 h-14 gap-10 -mt-1 ml-2 z-50">
                <span className="block h-1 w-8 bg-gray-600 -rotate-45"></span>
                <span className="block h-1 w-8 bg-gray-600 rotate-45"></span>
              </button>
              </li>
              <li><a href="#" className="block hover:border-b-2 border-blue-500 focus:text-cyan-800 focus:border-b-2">Home</a></li>
              <li><a href="#" className="block hover:border-b-2 border-blue-500 focus:text-cyan-800 focus:border-b-2">About</a></li>
              <li><a href="#" className="block hover:border-b-2 border-blue-500 focus:text-cyan-800 focus:border-b-2">Skill</a></li>
              <li><a href="#" className="block hover:border-b-2 border-blue-500 focus:text-cyan-800 focus:border-b-2">Experience</a></li>
              <li><a href="#" className="block hover:border-b-2 border-blue-500 focus:text-cyan-800 focus:border-b-2">Contact</a></li>
            </ul>
          </div>
        ):(
          <button onClick={(e)=> isOpen(true)} className="md:hidden space-y-2 absolute right-6 top-6">
              <span className="block h-1 w-8 bg-gray-600"></span>
              <span className="block h-1 w-8 bg-gray-600"></span>
              <span className="block h-1 w-8 bg-gray-600"></span>
          </button>  
        )}
          <ul className="hidden md:flex justify-end w-4/5 gap-10">
            <li><a href="#" className="text-black bg-transparent hover:border-b-2 border-blue-500">Home</a></li>
            <li><a href="#" className="text-black bg-transparent hover:border-b-2 border-blue-500">About</a></li>
            <li><a href="#" className="text-black bg-transparent hover:border-b-2 border-blue-500">Skill</a></li>
            <li><a href="#" className="text-black bg-transparent hover:border-b-2 border-blue-500">Experience</a></li>
            <li><a href="#" className="text-black bg-transparent hover:border-b-2 border-blue-500">Contact</a></li>
          </ul>
      </div>
    </nav>
  );
}

function home() {
  return(
   <div className="bg-white">
    <h1 className="text-black">halo</h1>
   </div> 
  )
}