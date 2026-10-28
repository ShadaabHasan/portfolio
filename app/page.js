import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <FeaturedProjects />
      </main>
      <Footer />
    </>
  );
}