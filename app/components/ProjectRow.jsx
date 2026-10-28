// One project, shown as a wide row: image on the left, details on the right.
// It receives ONE project from data/projects.js.
export default function ProjectRow({ project }) {
  return (
        <article className="grid md:grid-cols-[minmax(320px,40%)_1fr] gap-5 md:gap-14 py-12 border-b border-line items-start">  {/* box-corners draws the blue detection-box corners (see globals.css) */}
      <div className="box-corners relative aspect-[16/10] overflow-hidden bg-panel">
        <img src={project.image} alt="" loading="lazy" className="w-full h-full object-cover" />
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight">{project.title}</h3>

        {/* Only shown if the project has a key number */}
        {project.metric && (
          <p className="mt-3 flex flex-wrap items-baseline gap-x-3">
            <span className="text-4xl font-extrabold text-box tracking-tight">{project.metric}</span>
            <span className="text-muted">{project.metricLabel}</span>
          </p>
        )}

        <p className="mt-3 text-lg text-soft max-w-[36em]">{project.description}</p>

        {/* Only shown if the project has a "What I'd do differently" note */}
        {project.note && (
          <p className="mt-4 max-w-[38em] bg-note border-l-[3px] border-note-line text-note-ink px-4 py-3">
            <strong className="font-semibold">What I'd do differently:</strong> {project.note}
          </p>
        )}

        <p className="mt-4 text-muted">{project.tags.join(", ")}</p>

        <p className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-box underline underline-offset-4">
            Code on GitHub
          </a>
          {project.paper && (
            <a href={project.paper} target="_blank" rel="noopener noreferrer" className="text-box underline underline-offset-4">
              Read the paper
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-box underline underline-offset-4">
              Live site
            </a>
          )}
        </p>
      </div>
    </article>
  );
}