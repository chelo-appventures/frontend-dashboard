export default function RadioButton ({name, title}:{name:string, title:string}) {
    return (
        <div className="mx-6">
            <input 
                type="radio" 
                name={name}
                className="mx-3 font-semibold text-orange-500 border-orange-500" 
                />
            {title}
        </div>
    )
}

import React from 'react';

interface RadioButtonItem {
    name: string;
    label: string;
    value: string;
    checked?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButtonComponent: React.FC<RadioButtonItem> = ({name, label, value, checked, onChange }) => {
    return (
            <label className='flex'>
                <input type="radio" value={value} checked={checked} onChange={onChange} 
                className='bg-orange-500 accent-orange-500 border border-orange-500 h-4 w-4 flex mx-5 rounder-lg'/>
                {label}
            </label>
    );
};