import type {FC, ReactNode} from 'react'

interface CardChildren{
    children:ReactNode;
}


const CardBg:FC<CardChildren> = ({children}) => {
    return (
        <div className="p-[16px] rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))]">
            {children}
        </div>

    )
}

export default CardBg