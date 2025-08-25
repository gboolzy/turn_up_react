

import React from "react";
import type { FC, ReactNode } from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    type?: string;
    name?: string;
    icon?: string;
    id?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children?: ReactNode;
    className?:string;
    register?: UseFormRegisterReturn;
    error?: string;
    

}

const Input: FC<InputProps> = ({
    type = "text",
    name,
    id,
    icon,
    placeholder,
    value,
    onChange,
    className,
    register,
    error

}) => {

    return (
        <>
            <div className="mt-4 h-10 w-[100%] flex items-center border border-[rgba(255,255,255,0.08)] text-[#fff] px-[10px] rounded-[10px] gap-[10px] bg-[#0c1427]">
                {icon && <i className={icon}></i>}
                <input className={`w-[100%] h-[100%] outline-none border-none ${className || ""}`} type={type} {...register} name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} />
            </div>
            {error && <p className="text-red-500 text-sm text-left ml-2 mt-1 font-[10px]">{error}</p>}
        </>

    );
};

export default Input;

