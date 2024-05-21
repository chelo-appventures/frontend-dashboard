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
}

export type IconType = IconPeopleType | IconBagType;

function AVCounterIcon({icon}: {icon: IconType}) {
    return (
      <Image 
        src={icons[icon as string]} 
        alt={icon as string} 
        width={24} 
        height={24}
      />
    );
}

export default function AVCounter(
    {icon, title, subtitle}: 
    {icon: IconType, title: string, subtitle: string}
    ) {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="flex flex-row items-center gap-2 bg-black">
            <AVCounterIcon icon={icon} />
            <div className="flex flex-col">
                <p className="font-bold">{title}</p>
                <p className="text-gray-500">{subtitle}</p>
            </div>
            <div>
                <button className="rounded-full" onClick={()=> increment()}> + </button>       
                <span>{count}</span>
                <button className="rounded-full border border-gray-500 p-2" onClick={()=> decrement()}> - </button> 
            </div>
        </div>
    )
}

