import { useState } from "react";
import Input from "../../../components/Input"
import CardBg from "../components/card/CardBg";
import DashboardCard from "../components/card/DashboardCard"
import { BarChartMui, BarChartMui2 } from "../components/chart/mui/BarChartMui";
import '../../../App.css'
import TableContent from "../components/TableContent.tsx";
import {NavBar, NavBarBg} from "../components/navBar/NavBar.tsx";



const Dashboard = () => {

    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(!active);
    return (
        <>
        <NavBarBg active={active} toggleActive={toggleActive}/>
            
            <div className="h-[auto] min-h-[100vh] app-backgroung-grad px-[15px] pt-[10px] pb-[10vh]">

                <NavBar active={active} toggleActive={toggleActive}/>
                <div className="grid grid-cols-[auto_1fr_auto] gap-2 h-[45px]">
                    <div className="flex items-center h-[45px] mt-4 text-[#e2e8f0]" >
                        <button onClick={() => setActive(!active)} className="border border-[rgba(255,255,255,0.08)] p-[8px] rounded-[10px]">
                            <i className="bx bx-menu"></i>
                        </button>
                    </div>
                    <Input icon="bx bx-search" id="search" name="search" placeholder="search, reports, users, invoices... " type="text" />
                    <div className="flex items-center gap-2 h-[45px] mt-4 text-[#e2e8f0]" >
                        <button className="border border-[rgba(255,255,255,0.08)] p-[8px] rounded-[10px]">
                            <i className="bx bx-bell"></i>
                        </button>
                        <button className="border border-[rgba(255,255,255,0.08)] p-[8px] rounded-[10px]">
                            <i className="bx bx-message-dots"></i>
                        </button>

                        <div className="flex items-center gap-2 border border-[rgba(255,255,255,0.08)] p-[8px] rounded-[10px]">
                            <img src="/user1.svg" width="24" height="24" alt="logo" />
                            <span>Gbolahan</span>
                            <i className="bx bx-chevron-down"></i>
                        </div>
                    </div>
                </div>
                {/* grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] */}
                {/* grid-cols-[1fr_1fr_1fr_1fr] */}
                <div className="grid  grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 mt-7">
                    <DashboardCard title="Revenue" icon="bx bx-trending-up" price="&#8358; 128,940.00" discount="+12.4% this month" />
                    <DashboardCard title="Active Users" icon="bx bx-user-circle" price="24,581" discount="+3.1% vs last week" />
                    <DashboardCard title="Conversion" icon="bx bx-bulb" price="4.87%" discount="+0.4% WoW" />
                    <DashboardCard title="Tickets" icon="bx bx-support" price="312" discount="-7.8% resolved" />
                </div>
                {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-3 mt-7"> */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] md:grid-cols-[minmax(400px,2fr)_minmax(400px,1fr)] gap-3 mt-7">

                    {/* <CardBg>
                    <RenderBarChart />
                </CardBg> */}
                    <CardBg>
                        <BarChartMui2 />
                    </CardBg>
                    <CardBg>
                        <BarChartMui />
                    </CardBg>
                    {/* <CardBg>
                    <BarChartMui3 />
                </CardBg> */}


                </div>
                <div className="mt-4">
                    <CardBg>
                        <div className="h-[30px] text-[12px] flex justify-between text-[#e2e8f0]">
                            <p className="text-[#e5e7eb] text-[16px] font-bold">Recent Customer</p>
                            <button className=" rounded-[30px] flex justify-center gap-1 items-center text-[#e2e8f0] app-backgroung-grad py-[6px] px-[10px] border border-[rgba(255,255,255,.08)]">
                                <i className="bx bx-exit"></i> Logout
                            </button>
                        </div>
                        <div>
                            <table className="w-[100%] min-w-[700px] text-[#e5e7eb] mt-3 border-collapse text-left" >

                                <thead className=" bg-[#0b1220] text-[#cbd5e1] border border-[rgba(255,255,255,0.08)] ">
                                    <tr className="sticky">
                                        <th className="p-[12px]">Customer</th>
                                        <th className="p-[12px]">Plan</th>
                                        <th className="p-[12px]">MRR</th>
                                        <th className="p-[12px]">Status</th>
                                        <th className="p-[12px]">Joined</th>
                                        <th className="p-[12px]">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <TableContent />
                                </tbody>
                            </table>
                        </div>
                    </CardBg>
                </div>

            </div>
        </>
    )
}

export default Dashboard


// font-thin	font-weight: 100;
// font-extralight	font-weight: 200;
// font-light	font-weight: 300;
// font-normal	font-weight: 400;
// font-medium	font-weight: 500;
// font-semibold	font-weight: 600;
// font-bold	font-weight: 700;
// font-extrabold	font-weight: 800;
// font-black	font-weight: 900;


