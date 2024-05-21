'use client'
import { Stringifier } from "postcss";
import Image from "next/image";
import { useState } from "react";
import icons from "@/ui/icons";  

enum IconPeopleType {
    Adult = "adult",
    Child = "child",
    Puppie = "puppie",
    Baby = "baby",
}
enum IconBagType {
    Carry = "carry",
    Bag = "bag",
    Special = "special",
}

export type IconType = IconPeopleType | IconBagType;

function AVCounterIcon({icon}: {icon: IconType}) {
    return (
      <Image 
        src={icons[icon as string]} 
        alt={icon as string} 
        width={32} 
        height={32}
        className=""
      />
    );
}

export default function AVCounter(
    {icon, title, subtitle}: 
    {icon: IconType, title: string, subtitle: string}
    ) {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1 > 0 ? count + 1 : 0);
    const decrement = () => setCount(count - 1 > 0 ? count - 1 : 0);

    return (
        <div className="flex flex-row items-center gap-2 border border-gray-200 p-2 rounded-lg">
            <AVCounterIcon icon={icon} />
            <div className="flex flex-col">
                <p className="text-smfont-bold">{title}</p>
                <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
            <div className="flex flex-row items-center justify-center">
                <button 
                  className="m-2 w-7 h-7 rounded-full border border-red-500" 
                  onClick={(e)=> {
                    e.preventDefault();
                    increment();
                  }}
                > + </button>       
                <span className="w-3 text-center">{count}</span>
                <button 
                  className="m-2 w-7 h-7 rounded-full border border-red-500" 
                  onClick={(e)=> {
                    e.preventDefault();
                    decrement();
                  }}
                > - </button> 
            </div>
        </div>
    )
}

