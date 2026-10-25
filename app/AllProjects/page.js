import Footer from '../components/Footer';
import ProjectCard from "../components/ProjectCard";
import BottomMargin from "../components/BottomMargin";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
};

const AllProjects = () => {
  return (
    <div className='red-footer'>
      <BottomMargin offset={400}>
        <div className='min-h-screen bg-gradient-to-br from-slate-900 to-rose-800 text-white pb-20 rounded-b-3xl'>
          <div className="container mx-auto padding-top-project">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold">All Projects</h2>
              <p className="mt-4 text-lg grey">
                A showcase of my recent projects, demonstrating my skills in AI, machine learning, and more.
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-20 p-5 mt-6 mx-2 md:mx-20">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </BottomMargin>
      <div className='red-footer text-white mt-16'>
        <Footer />
      </div>
    </div>
  )
}

export default AllProjects