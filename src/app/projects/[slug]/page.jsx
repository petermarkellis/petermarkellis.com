import ProjectClient from "./project-client";
import projects from "@/projects";

export default async function ProjectPage( {params} ) {
    const { slug } = await params;
    const project = projects.find((project) => project.slug === slug);

    const currentIndex = projects.findIndex((project) => project.slug === slug);
    const nextProjectIndex = (currentIndex + 1) % projects.length;
    const prevProjectIndex = (currentIndex - 1 + projects.length) % projects.length;

    const nextProject = projects[nextProjectIndex];
    const prevProject = projects[prevProjectIndex];

    return (
        <ProjectClient 
            project={project} 
            nextProject={nextProject}
            prevProject={prevProject}
        />
    )
}