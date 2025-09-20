import { useState, useEffect, type FC } from 'react'
import { Link, useLocation } from 'react-router-dom';

interface navBarProps {
    active: boolean;
    toggleActive: () => void;

}

const NavBar: FC<navBarProps> = ({ active, toggleActive }) => {
    const [activeNav, setActiveNav] = useState<string>("active");
    const [displaySubNav, setDisplaySubNav] = useState<boolean>(false);
    const location = useLocation();
    // console.log(location);


    const displaySubNavFunc = () => setDisplaySubNav(!displaySubNav);

    useEffect(() => {
        const currentPage = location.pathname.split("/").filter(Boolean).pop() || "dashboard";
        // console.log(currentPage);
        setActiveNav(currentPage);
    }, [location]

    )




    return (
        <>
            <div onClick={toggleActive} className={`${active ? "block" : "hidden"}  fixed h-[100vh] w-[100vw] top-0 left-0 bg-[rgba(0,0,0,0.2)] z-[8888]`}>
            </div>
            <aside className={`fixed top-0 left-0 z-[9999] bg-gradient-to-b from-[#0b1020] via-[#0b1220] to-[#0f172a] h-[100%] py-[18px] px-[14px] flex flex-col gap-14 ${active ? 'transition-transform duration-500 translate-x-0' : 'transition-transform duration-500 translate-x-[-300px]'} `}>
                <div className="flex flex-col gap-4">
                    <button onClick={toggleActive} className="border border-[rgba(255,255,255,0.08)] flex items-center justify-center  rounded-[10px] w-[40px] h-[40px] text-[#e2e8f0] cursor-pointer">
                        <i className="bx bx-x text-[20px]"></i>
                    </button>
                    <p className="text-[#e5e7eb] font-bold text-[18px] flex items-center gap-1">
                        <i className="bx bxs-dashboard text-[#6366f1] text-[22px]"></i>
                        <span>NovaBoard</span>
                    </p>
                    <nav className="flex flex-col gap-1 text-[#94a3b8]">
                        <Link to="/dashboard" className={`flex ${activeNav == "dashboard" ? "bg-gradient-to-r from-indigo-500/15 to-cyan-400/12 text-[#fff] border border-[rgba(255,255,255,0.08)]" : ""}   rounded-[12px] w-[231px] py-[10px] px-[12px] gap-3 items-center hover:border-[rgba(255,255,255,0.08)]  hover:bg-gradient-to-r from-indigo-500/8 to-cyan-400/5`}>
                            <i className="bx bx-home-alt-2"></i>
                            <span>Overview</span>
                        </Link>
                        <Link to="/profile" className={`flex ${activeNav == "profile" ? "bg-gradient-to-r from-indigo-500/15 to-cyan-400/12 text-[#fff] border border-[rgba(255,255,255,0.08)]" : ""} border border-[rgba(255,255,255,0.01)] rounded-[12px] w-[231px] py-[10px] px-[12px] gap-3 items-center hover:border  hover:border-[rgba(255,255,255,0.08)]  hover:bg-gradient-to-r from-indigo-500/8 to-cyan-400/5 cursor-pointer hover:text-[#fff]`}  >
                            <i className="bx bx-user-circle"></i>
                            <span>My Profile</span>
                        </Link>

                        <Link to="/layout" className={`flex ${activeNav == "layout" ? "bg-gradient-to-r from-indigo-500/15 to-cyan-400/12 text-[#fff] border border-[rgba(255,255,255,0.08)]" : ""} border border-[rgba(255,255,255,0.01)] rounded-[12px] w-[231px] py-[10px] px-[12px] gap-3 items-center hover:border  hover:border-[rgba(255,255,255,0.08)]  hover:bg-gradient-to-r from-indigo-500/8 to-cyan-400/5 cursor-pointer hover:text-[#fff]`}  >
                            <i className="bx bx-user-circle"></i>
                            <span>CSS Layout</span>
                        </Link>
                        {/* <Link to="/game" className={`flex ${activeNav == "game" ? "bg-gradient-to-r from-indigo-500/15 to-cyan-400/12 text-[#fff] border border-[rgba(255,255,255,0.08)]" : ""} border border-[rgba(255,255,255,0.01)] rounded-[12px] w-[231px] py-[10px] px-[12px] gap-3 items-center hover:border  hover:border-[rgba(255,255,255,0.08)]  hover:bg-gradient-to-r from-indigo-500/8 to-cyan-400/5 cursor-pointer hover:text-[#fff]`}  >
                            <i className="bx bx-user-circle"></i>
                            <span>Games</span>
                        </Link> */}
                        <div>
                            <div onClick={displaySubNavFunc} className={`flex ${activeNav == "games" ? "bg-gradient-to-r from-indigo-500/15 to-cyan-400/12 text-[#fff] border border-[rgba(255,255,255,0.08)]" : ""} border border-[rgba(255,255,255,0.01)] rounded-[12px] w-[231px] py-[10px] px-[12px] gap-3 items-center justify-between hover:border  hover:border-[rgba(255,255,255,0.08)]  hover:bg-gradient-to-r from-indigo-500/8 to-cyan-400/5 cursor-pointer hover:text-[#fff]`}  >
                                <div className='flex gap-3 items-center'>
                                    <i className="bx bx-joystick-button"></i>
                                    <span>Game</span>
                                </div>
                                <i className={`${displaySubNav ? 'bx bx-caret-down' : 'bx bx-caret-right'}`}></i>
                            </div>
                            <ul className={`ml-10 mt-2 text-[14px] ${displaySubNav ? 'transition-all duration-500 translate-y-0 opacity-100' : 'transition-all duration-500 translate-y-[-25px] opacity-0'} `}>
                                <li>
                                    <Link to="/games/card-game" className={`flex ${activeNav == "card-game" ? "bg-gradient-to-r from-indigo-500/15 to-cyan-400/12 text-[#fff] border border-[rgba(255,255,255,0.08)]" : ""} border border-[rgba(255,255,255,0.01)] rounded-[12px] w-[231px] py-[10px] px-[12px] gap-3 items-center hover:border  hover:border-[rgba(255,255,255,0.08)]  hover:bg-gradient-to-r from-indigo-500/8 to-cyan-400/5 cursor-pointer hover:text-[#fff] mb-2`}  >
                                        Card Game
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/games/hangman" className={`flex ${activeNav == "hangman" ? "bg-gradient-to-r from-indigo-500/15 to-cyan-400/12 text-[#fff] border border-[rgba(255,255,255,0.08)]" : ""} border border-[rgba(255,255,255,0.01)] rounded-[12px] w-[231px] py-[10px] px-[12px] gap-3 items-center hover:border  hover:border-[rgba(255,255,255,0.08)]  hover:bg-gradient-to-r from-indigo-500/8 to-cyan-400/5 cursor-pointer hover:text-[#fff] mb-2`}  >
                                        Hangman
                                    </Link>
                                </li>
                                <li></li>
                            </ul>
                        </div>

                        {/* <a className="flex border border-[rgba(255,255,255,0.01)] rounded-[12px] w-[231px] py-[10px] px-[12px] gap-3 items-center hover:border  hover:border-[rgba(255,255,255,0.08)]  hover:bg-gradient-to-r from-indigo-500/8 to-cyan-400/5 cursor-pointer hover:text-[#fff]" >
                            <i className="bx bx-bar-chart-alt-2"></i>
                            <span>Analytics</span>
                        </a>
                        <a className="flex border border-[rgba(255,255,255,0.01)] rounded-[12px] w-[231px] py-[10px] px-[12px] gap-3 items-center hover:border  hover:border-[rgba(255,255,255,0.08)]  hover:bg-gradient-to-r from-indigo-500/8 to-cyan-400/5 cursor-pointer hover:text-[#fff]">
                            <i className="bx bx-cart"></i>
                            <span>Orders</span>
                        </a>
                        <a className="flex border border-[rgba(255,255,255,0.01)] rounded-[12px] w-[231px] py-[10px] px-[12px] gap-3 items-center hover:border  hover:border-[rgba(255,255,255,0.08)]  hover:bg-gradient-to-r from-indigo-500/8 to-cyan-400/5 cursor-pointer hover:text-[#fff]">
                            <i className="bx bx-cog"></i>
                            <span>Settings</span>
                        </a> */}
                    </nav>
                    <Link to="/" className="border border-[rgba(255,255,255,0.08)] hover:border-2 transition-all duration-200 ease-in-out  hover:border-[rgba(255,255,255,0.1)]  text-[#94a3b8] text-[12px] rounded-[12px] cursor-pointer py-[8px]">
                        <button className='flex items-center justify-center gap-2 w-[100%] cursor-pointer'>
                            <i className="bx bx-exit"></i>
                            <span>Logout</span>
                        </button>
                    </Link>
                </div>

            </aside>
        </>
    )
}


// const NavBarBg: FC<navBarProps> = ({ active, toggleActive }) => {
//     return (
//         <div onClick={toggleActive} className={`${active ? "block" : "hidden"}  fixed h-[100vh] w-[100vw] top-0 left-0 bg-[rgba(0,0,0,0.2)] z-[8888]`}>
//         </div>
//     )
// }


export { NavBar }