import ProjectRow from "../components/ProjectRow";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
};

export default function AllProjects() {
  return (
    <>
      <main className="max-w-[1240px] mx-auto px-5 md:px-10 pb-20">
        <header className="pt-16 md:pt-24 pb-6 border-b border-line">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.03em]">Projects</h1>
          <p className="mt-6 max-w-[34em] text-lg md:text-xl text-soft">
            Everything I've built, strongest work first. Each project says what I built and, for team projects,
            which part was mine.
          </p>
        </header>

        {/* Every project in data/projects.js, featured or not */}
        {projects.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </main>
    </>
  );
}