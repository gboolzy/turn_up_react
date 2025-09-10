import type {FC} from 'react'

interface CardProps{
    icon:string
    skill: String,
    skillDesc: string,
    techStack: string
}

const ProfileSkillCard:FC<CardProps> = ({icon,skill, skillDesc, techStack}) => {
  return (
    <div className="w-[350px] min-h-[450px] h-auto mr-auto ml-auto mb-8 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]
                     rounded-[20px] shadow-[0_10px_30px_rgba(2,6,23,0.5)] text-center px-6 pb-10">
          <img src={icon} className="h-[50px] w-[50px] block ml-auto mr-auto mt-8" />
          <h3 className="text-[#fff] text-[20px] font-bold pt-[15px] font-roboto">{skill}</h3>
          <p className="text-[#cbd5e1] text-[13px] font-normal font-roboto mt-4 md:min-h-[180px] lg:min-h-[100px]">{skillDesc}</p>

          <h3 className="text-[#6366f1] text-[18px] font-light mt-5 font-roboto">Technologies Stack:</h3>
          <p className="text-[#cbd5e1] text-[14px] font-extralight italcs font-roboto mt-4">{techStack}</p>
        </div>
  )
}

export default ProfileSkillCard