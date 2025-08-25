import type { FC } from "react";

interface AuthButtonProps {
    buttonText?: string;
    

}
const AuthButton: FC<AuthButtonProps> = ({ buttonText }) => {
    return (
        <button type="submit" className="bg-[#6366f1] text-[#fff] w-[100%] h-9 mt-4 rounded-[10px]">{buttonText}</button>

    )
}

export default AuthButton