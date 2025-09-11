import { NavBar } from "../navBar/NavBar";
import { useState } from "react";
import ProfileSkillCard from "./components/ProfileSkillCard";
import '../../App.css'

export default function Profile() {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive(!active);
  return (

    <>
      <NavBar active={active} toggleActive={toggleActive} />
      <div className="block app-backgroung-grad text-center h-auto min-h-[100vh]">
        <div className="flex items-center h-[45px] pt-[4vh] ml-4 text-[#e2e8f0]" >
          <button onClick={() => setActive(!active)} className="border border-[rgba(255,255,255,0.08)] p-[8px] rounded-[10px]">
            <i className="bx bx-menu"></i>
          </button>
        </div>
        <h3 className="text-[#fff] text-[30px] font-extrabold pt-[8vh]">Giwa Gbolahan Moshood</h3>
        <p className="text-[#cbd5e1] text-[14px] w-[55vw] min-w-[300px] ml-auto mr-auto mt-2">
          Creative and detail-oriented React.js Developer with over 7 years of software
          development experience and 4+ years focused on building dynamic,
          responsive web applications using React.js.
          Proven expertise in component-based architecture,
          state management, API integration, and modern JavaScript practices.
          Adept at translating UI/UX designs into functional
          interfaces and collaborating with cross-functional
          teams in Agile environments to deliver high-quality web solutions.
        </p>

        <div className="bg-[url('my_pics.jpg')] bg-cover bg-left ml-auto mr-auto mt-5 w-[200px] h-[200px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]
                     rounded-[200px] shadow-[0_10px_30px_rgba(2,6,23,0.5)]">
          {/* <img src="my_pics.jpg" alt="My Image" className="rounded-[200px] w-[100%] h-[100%]" /> */}
        </div>
        <h3 className="text-[#fff] text-[30px] font-bold mt-[6vh] font-roboto skill-set-slider">Skills</h3>
        {/* <h3 className="text-[#fff] text-[30px] font-bold mt-[6vh] font-roboto skill-set-slider">I'm a
          <span>
            <span> Coder</span>
            <span>Developer</span>
            <span>Programmer</span>
            <span>Software Engineer</span>
            <span> Coder</span>
          </span>
        </h3> */}


        <section className="mt-5 px-[10vw] pb-[10vh]  md:flex md:justify-center gap-6">

          <ProfileSkillCard icon="usb_24.svg" skill="Front-end Developer" skillDesc="I craft solutions from scratch,
            transforming ideas into reality with precision and creativity,
            while aligning every detail with your product’s vision as a dedicated front-end developer." techStack="HTML, CSS, bootstrap, React.js, Tailwind, TypeScript, JavaScript" />

          <ProfileSkillCard icon="code_off.svg" skill="Back-end Developer" skillDesc="I engineer powerful back-end solutions that drive performance, scalability,
            and reliability—turning complex challenges into seamless systems that fuel your product’s growth and success." techStack="node.js, spring-boot, java, TypeScript, JavaScript" />
          <ProfileSkillCard icon="mobile_24.svg" skill="Mobile Developer" skillDesc="I craft high-performing mobile apps from the ground up, turning concepts into intuitive cross-platform experiences that stay true to your product’s vision and user needs." techStack="Flutter" />
        </section>
      </div>
    </>
  );
}
