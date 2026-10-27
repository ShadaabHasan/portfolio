import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="max-w-[1240px] mx-auto px-5 md:px-10">
        <Hero />
        <FeaturedProjects />

        {/* Contact */}
        <section className="grid md:grid-cols-2 gap-6 md:gap-16 md:items-end py-20 md:py-28">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get in touch</h2>
            <p className="mt-5 max-w-[28em] text-lg md:text-xl text-soft">
              I'm looking for data scientist roles in Ireland. The quickest way to reach me is email.
            </p>
          </div>
          <a
            href="mailto:shadaabhasan7@gmail.com"
            className="text-2xl md:text-4xl font-bold tracking-tight text-box underline underline-offset-8 break-all"
          >
            shadaabhasan7@gmail.com
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}