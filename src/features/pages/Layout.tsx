import React, { useState } from "react";
import { NavBar } from "../navBar/NavBar";
// import Input from "../../components/Input";

const Layout = () => {
    const [active, setActive] = useState(false);
    const [selectedVertical, setSelectedVertical] = useState<string>("items-start");
    const [selectedHorizontal, setSelectedHorizontal] = useState<string>("");
    const toggleActive = () => setActive(!active);
    const handleVericalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedVertical(event.target.value);
    }
    const handleHorizontalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedHorizontal(event.target.value)
    }
    return (
        <>

            <NavBar active={active} toggleActive={toggleActive} />

            <div className="block app-backgroung-grad text-center h-auto min-h-[100vh] pb-8">
                <div className="flex items-center h-[45px] pt-[4vh] ml-4 text-[#e2e8f0]" >
                    <button onClick={() => setActive(!active)} className="border border-[rgba(255,255,255,0.08)] p-[8px] rounded-[10px]">
                        <i className="bx bx-menu"></i>
                    </button>
                </div>
                <h3 className="text-[#fff] text-[30px] font-extrabold pt-[8vh]">Flexbox</h3>
                <section className="w-[80vw] mr-auto ml-auto mt-5">
                    <div className="grid grid-cols-[2fr_2fr_1fr] gap-2 items-end">
                        {/* <Input icon="bx bx-search" id="items" name="items" placeholder="input items number" type="text" /> */}
                        <div className="text-left text-[#cbd5e1] text-[14px] font-roboto">
                            <label>Horizontal Alignment</label>
                            <div className="mt-4 h-10 w-[100%] flex items-center border border-[rgba(255,255,255,0.08)] text-[#fff] px-[10px] rounded-[10px] gap-[10px] bg-[#0c1427]">
                                <select className="w-[100%] outline-none border-none" value={selectedHorizontal} onChange={handleHorizontalChange}>
                                    <option value="">Select</option>
                                    <option value="justify-start">Start</option>
                                    <option value="justify-between">Space between</option>
                                    <option value="justify-around">Space around</option>
                                    <option value="justify-center">center</option>
                                    <option value="justify-end">end</option>
                                    <option value="justify-evenly">space evenly</option>

                                </select>
                            </div>
                        </div>
                        <div className="text-left text-[#cbd5e1] text-[14px] font-roboto">
                            <label>Vertical Alignment</label>
                            <div className="mt-4 h-10 w-[100%] flex items-center border border-[rgba(255,255,255,0.08)] text-[#fff] px-[10px] rounded-[10px] gap-[10px] bg-[#0c1427]">
                                <select className="w-[100%] outline-none border-none" value={selectedVertical} onChange={handleVericalChange}>
                                    <option value="">Select</option>
                                    <option value="items-start">Start</option>
                                    <option value="items-stretch">Strech</option>
                                    <option value="items-center">center</option>
                                    <option value="items-end">end</option>

                                </select>
                            </div>
                        </div>
                        {/* <button type="button" className="bg-[#6366f1] text-[#fff] w-[100%] h-9 rounded-[10px]">View</button> */}

                    </div>
                </section>

                <section className="border border-[rgba(255,255,255,0.08)] w-[80vw] p-[15px] ml-auto mr-auto mt-[40px] rounded-[15px]">
                    <div className={`flex ${selectedVertical} ${selectedHorizontal} gap-2 h-[300px]  transition-all duration-300`}>
                        <div className="w-[100px] min-h-[100px] bg-amber-100"></div>
                        <div className="w-[100px] min-h-[100px] bg-amber-100"></div>
                        <div className="w-[100px] min-h-[100px] bg-amber-100"></div>
                    </div>

                </section>

            </div>

        </>
    )
}

export default Layout