// One project card. It receives ONE project from data/projects.js and draws it.
export default function ProjectCard({ project }) {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full object-cover transition-transform duration-300 hover:scale-105"
      />

      <div className="p-6 flex flex-col flex-grow gap-4">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p>{project.description}</p>
        </div>

        {/* One tag bubble for each item in project.tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border font-medium text-xs px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border text-sm font-medium h-9 px-4 py-2"
          >
            GitHub
          </a>

          {/* Only show this button if the project has a liveDemo link */}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}