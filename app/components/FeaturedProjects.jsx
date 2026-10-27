import Link from "next/link";
import ProjectRow from "./ProjectRow";
import { projects } from "@/data/projects";

const FeaturedProjects = () => {
  // Keep only the projects marked "featured: true"
  const featured = projects.filter((project) => project.featured);

  return (
    <section id="featuredproj" className="border-t border-line pt-16 md:pt-20 scroll-mt-16">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h2>

      <div className="mt-4">
        {featured.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </div>

      <Link href="/AllProjects" className="inline-block mt-10 px-6 py-3.5 font-semibold border-2 border-ink">
        See all projects
      </Link>
    </section>
  );
};

export default FeaturedProjects;