import type { FC } from 'react'
interface ActionButtonProps {
    buttonIcon: string;
    onClick?: ()=>void;

}

const ActionButton: FC<ActionButtonProps> = ({ buttonIcon, onClick }) => {
    return (
        <button onClick={onClick} className="border border-[rgba(255,255,255,0.08)] p-[8px] rounded-[10px] cursor-pointer">
            <i className={buttonIcon}></i>
        </button>
    )
}

export default ActionButton