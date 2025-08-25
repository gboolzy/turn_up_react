import type { FC } from 'react'
interface badgeProps {
    className?:string;

}

const Badge: FC<badgeProps> = ({className }) => {
    return (
        <span className= {(className || "" ) +" px-[8px] py-[4px] text-[12px] border border-[rgba(255,255,255,0.08)] rounded-[100px]"} >Active</span>
    )
}

export default Badge