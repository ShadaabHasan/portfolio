import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const FeaturedProjects = () => {
  // Keep only the projects marked "featured: true"
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="padding-top-featuredproj" id="featuredproj">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">{"{Featured Projects}"}</h2>
          <p className="mt-4 text-lg grey">
            A showcase of my recent projects, demonstrating my skills in AI, machine learning, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 p-5 mx-2 md:mx-10">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center padding-top-portfolio-button">
          <Link
            href="/AllProjects"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;