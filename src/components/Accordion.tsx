'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import adultIcon from '@/ui/icons/adult.svg'
import Image from 'next/image'

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    return (
        <div className="w-full mt-10">
            <div 
                className="flex justify-between items-center px-5 pt-3 pb-1 border-b border-blue-900 text-black font-bold rounded-t-lg cursor-pointer"
                onClick={toggleAccordion}
            >
                
                <h1 className='text-[22px] font-bold text-blue-900 flex items-center'>
                <Image src={adultIcon} alt="paxbold" className="h-8 w-8 mr-2" />
                    {title}
                </h1>
                <span className="text-2xl">
                    <ChevronDownIcon className={`size-4 ${isOpen ? 'rotate-180 duration-300' : 'duration-300'}`} />
                </span>
            </div>
            <div
                ref={contentRef}
                className="px-5  rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: height }}
            >
                <div className="py-5">
                    {children}
                </div>
            </div>
        </div>
    );
};


export default Accordion;