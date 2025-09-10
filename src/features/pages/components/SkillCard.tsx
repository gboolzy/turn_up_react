import type { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition w-full md:w-64">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}
