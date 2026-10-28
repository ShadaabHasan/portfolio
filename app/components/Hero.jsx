import Image from "next/image";

// The top of the Home page: my name in a detection box, and real results from my model
export default function Hero() {
  return (
    <section className="grid md:grid-cols-[1.05fr_1fr] gap-12 md:gap-16 items-center pt-12 pb-16 md:pt-20 md:pb-28">
      <div>
        {/* The detection box around my name, with its label tag on the top-left corner */}
                <h1 className="text-5xl md:text-[88px] leading-[0.95] font-extrabold tracking-[-0.035em]">
          Shadaab
          <br />
          Hasan
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-semibold text-box">Data scientist</p>

        <p className="mt-10 max-w-[30em] text-lg md:text-xl text-soft">
          I build machine learning models for images and text, and I check that their results hold up.
          M.Sc. in Computer Science (Data Analytics), University of Galway. Based in Galway.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#featuredproj" className="px-6 py-3.5 font-semibold border-2 border-ink bg-ink text-bg">
            See my projects
          </a>
          <a
            href="/Shadaab_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 font-semibold border-2 border-ink"
          >
            Download CV
          </a>
        </div>
      </div>

      <figure>
        <Image
          src="/projects/object-tracking.jpg"
          alt="A grid of photos with coloured boxes and labels such as car, horse and person, drawn by my YOLO11n model"
          width={1920}
          height={1280}
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="w-full h-auto border border-line"
        />
        <figcaption className="mt-3 text-sm text-muted">
          Detections from my YOLO11n model on Pascal VOC test images.
        </figcaption>
      </figure>
    </section>
  );
}