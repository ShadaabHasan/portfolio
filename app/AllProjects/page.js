import ProjectRow from "../components/ProjectRow";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
};

export default function AllProjects() {
  return (
    <main className="px-[4vw] pb-24">
      <header className="pt-[6vh] md:pt-[9vh] pb-14 border-b border-line">
        <h1 className="text-[clamp(56px,9vw,140px)] font-extrabold tracking-[-0.05em] leading-[0.9]">Projects</h1>
        <p className="mt-10 max-w-[34em] text-lg md:text-xl text-soft">
          Everything I've built, strongest work first. Each project says what I built and, for team projects,
          which part was mine.
        </p>
      </header>

      {/* Every project in data/projects.js, featured or not */}
      {projects.map((project) => (
        <ProjectRow key={project.title} project={project} />
      ))}
    </main>
  );
}