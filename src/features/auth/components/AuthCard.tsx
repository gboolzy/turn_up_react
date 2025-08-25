import type { FC, ReactNode } from "react";

interface InputProps {
    children?: ReactNode;
}

const AuthCard: FC<InputProps> = ({
children

}) => {
    return (
        <div className="flex h-screen app-backgroung-grad items-center justify-center">
            <div className="max-w-[400px] w-[100%]">
                <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]
                     rounded-[16px] shadow-[0_10px_30px_rgba(2,6,23,0.5)] px-[22px] py-[24px] text-center">
                        {children}
                </div>
            </div>
        </div>

    );
};

export default AuthCard;