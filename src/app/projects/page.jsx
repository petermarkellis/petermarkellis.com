import { projects } from '../../projects';
export const metadata = {
  title: 'Projects',
  description: 'Showcase of design and development projects by Peter Mark Ellis, featuring work for leading brands and startups.',
  openGraph: {
    title: 'Projects | Peter Mark Ellis',
    description: 'Showcase of design and development projects featuring work for leading brands and startups.',
  },
};

import Link from "next/link";

export default function Projects() {
    return (
        <div className="">
            <ul className="projects-list w-full flex flex-col gap-0">
            {projects.map((project) => (
                <Link key={project.id} href={`/projects/${project.slug}`} className="block">
                    <li className="flex flex-col gap-0 items-center justify-center border-b border-slate-700 hover:bg-slate-200 transition-all duration-300 cursor-pointer">
                        <div className="flex flex-col md:flex-row items-center justify-between w-1/2 h-full py-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-8xl text-center font-medium select-none">{project.title}</h2>
                            <span className="text-2xl sm:text-sm lg:text-xl xl:text-xl text-center font-medium select-none">View Project</span>
                        </div>
                    </li>
                </Link>
            ))}
            </ul>
        </div>
    )
}