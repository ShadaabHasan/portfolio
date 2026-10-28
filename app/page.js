import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />

        {/* Everything below the hero, for now still in the old layout */}
        <div className="max-w-[1240px] mx-auto px-5 md:px-10">
          <FeaturedProjects />
        </div>
      </main>
      <Footer />
    </>
  );
}