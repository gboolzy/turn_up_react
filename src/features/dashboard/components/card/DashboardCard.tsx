import type { FC } from "react";


interface DashboardCardProps {
    title: string;
    icon: string;
    price: string;
    discount: string;

}

const DashboardCard: FC<DashboardCardProps> = ({ title, icon, price, discount }) => {

    return (
        <div className="p-[16px] rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))]">
            <div className="text-[#cbd5e1] flex justify-between w-full">
                <p>{title}</p>
                <i className={icon}></i>
            </div>
            <h3 className="text-[#e5e7eb] text-[26px] font-extrabold mt-1">{price}</h3>
            <p className="text-[#7dd3fc] font-inter mt-1">{discount}</p>
        </div>
    )
}

export default DashboardCard;