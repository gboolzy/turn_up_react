import type { FC } from 'react'
interface ActionButtonProps {
    buttonIcon: string;
}

const ActionButton: FC<ActionButtonProps> = ({ buttonIcon }) => {
    return (
        <button className="border border-[rgba(255,255,255,0.08)] p-[8px] rounded-[10px]">
            <i className={buttonIcon}></i>
        </button>
    )
}

export default ActionButton