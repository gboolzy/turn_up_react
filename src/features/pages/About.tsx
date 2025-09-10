import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiSpringboot } from "react-icons/si";
import SkillCard from "./components/SkillCard";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">👋 Hi, I'm Giwa Gbolahan Moshood</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          A results-driven <span className="font-semibold">React & Full-Stack Developer</span> with 
          5+ years of experience building fintech, enterprise, and scalable applications. 
          Passionate about clean code, performance, and user experience.
        </p>
      </header>

      {/* Skills */}
      <section className="w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-6 text-center">💻 Core Skills</h2>
        <div className="grid gap-6 md:grid-cols-3 justify-items-center">
          <SkillCard
            icon={<FaReact className="text-blue-500" />}
            title="React & TypeScript"
            description="Building responsive, scalable, and maintainable frontends."
          />
          <SkillCard
            icon={<SiTailwindcss className="text-cyan-500" />}
            title="TailwindCSS"
            description="Crafting beautiful, modern, and responsive UI fast."
          />
          <SkillCard
            icon={<FaNodeJs className="text-green-600" />}
            title="Node.js"
            description="Backend APIs and microservices with Express and NestJS."
          />
          <SkillCard
            icon={<SiSpringboot className="text-green-700" />}
            title="Java & Spring Boot"
            description="Robust enterprise applications and API development."
          />
          <SkillCard
            icon={<FaDatabase className="text-indigo-600" />}
            title="Databases"
            description="Efficient data modeling with MySQL, PostgreSQL, MongoDB."
          />
          <SkillCard
            icon={<SiTypescript className="text-blue-600" />}
            title="TypeScript"
            description="Strongly typed applications ensuring maintainability."
          />
        </div>
      </section>

      {/* Qualities */}
      <section className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">🌟 My Qualities</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          <li>✅ Problem-solver with strong debugging skills</li>
          <li>✅ Experienced in fintech applications and enterprise systems</li>
          <li>✅ Strong foundation in business, finance, and administration</li>
          <li>✅ Advocate of clean, maintainable, and testable code</li>
          <li>✅ Team player with mentoring & leadership experience</li>
          <li>✅ Continuous learner, adapting to new tools & technologies</li>
        </ul>
      </section>
    </div>
  );
}
