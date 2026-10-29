export const metadata = {
  title: "About",
};


const education = [
  {
    title: "M.Sc. Computer Science (Data Analytics)",
    place: "University of Galway, Ireland",
    years: "2025 – 2026",
    result: "2.1 (Second Class Honours, Grade 1)",
    detail: "Thesis: tracking honeybees with event cameras.",
  },
  {
    title: "B.E. Computer Engineering",
    place: "Rizvi College of Engineering, University of Mumbai",
    years: "2021 – 2025",
    result: "CGPA 7.77 / 10",
  },
];

const publications = [
  {
    title: "Skin Cancer Recognition System",
    place: "Journal of Emerging Technologies and Innovative Research (JETIR)",
    date: "June 2024",
    link: "https://www.jetir.org/view?paper=JETIR2406947",
  },
];

const certifications = [
  {
    title: "Data Analytics with Python",
    place: "NPTEL",
    date: "May 2025",
    link: "/certificates/NPTEL-Data-Analytics-with-Python.pdf"
  },
  {
    title: "AWS Academy Cloud Foundations",
    place: "Amazon Web Services",
    date: "April 2024",
    link: "https://www.credly.com/badges/1ff729b5-7ab3-4936-a8ed-18c362e89538/linked_in_profile",
  },
  {
    title: "Applied Machine Learning in Python",
    place: "University of Michigan (Coursera)",
    date: "November 2022",
    link: "https://www.coursera.org/account/accomplishments/certificate/C6TSEDWSJ24X",
  },
];

const skills = [
  { group: "Areas", items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Predictive Modelling"] },
  { group: "Languages and libraries", items: ["Python", "R", "SQL", "PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "OpenCV", "Pandas"] },
  { group: "Tools and cloud", items: ["Git", "Linux", "AWS", "Jupyter", "Next.js"] },
];

// ---------- Small building blocks ----------

// One section: the heading on the left, the content on the right (stacked on phones)
function Section({ title, children }) {
  return (
    <section className="grid md:grid-cols-[minmax(200px,28%)_1fr] gap-4 md:gap-14 py-14 border-b border-line">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Entry({ title, place, date, link, children }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-1 md:gap-8 py-4 first:pt-0 last:pb-0">
      <div>
        <h3 className="text-xl font-semibold">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-box underline underline-offset-4">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="text-soft">{place}</p>
        {children}
      </div>
      <p className="text-muted md:text-right shrink-0">{date}</p>
    </div>
  );
}

export default function AboutMePage() {
  return (
    <main className="px-[4vw] pb-24">
      <header className="pt-[6vh] md:pt-[9vh] pb-14 border-b border-line">
        <h1 className="text-[clamp(56px,9vw,140px)] font-extrabold tracking-[-0.05em] leading-[0.9]">About</h1>
        <div className="mt-10 max-w-[36em] space-y-5 text-lg md:text-xl text-soft">
          <p>
            I'm a data scientist based in Galway. I finished my M.Sc. in Computer Science (Data Analytics) at the
            University of Galway in 2026, with a thesis on tracking honeybees with event cameras. Before that, I
            studied Computer Engineering in Mumbai.
          </p>
          <p>
            I work mostly with images and text: object detection and tracking, sentiment analysis, and medical
            image classification. I like the part of the job where results have to be checked twice: finding data
            leaks, choosing fair test sets, and explaining what a model gets wrong.
          </p>
        </div>
        <a
          href="/Shadaab_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-6 py-3.5 font-semibold border-2 border-ink bg-ink text-bg"
        >
          Download CV
        </a>
      </header>

      <Section title="Education">
        {education.map((item) => (
          <Entry key={item.title} title={item.title} place={item.place} date={item.years}>
            <p className="mt-1 font-semibold text-ink">{item.result}</p>
            {item.detail && <p className="text-muted">{item.detail}</p>}
          </Entry>
        ))}
      </Section>

      <Section title="Publication">
        {publications.map((item) => (
          <Entry key={item.title} {...item} />
        ))}
      </Section>

      <Section title="Certifications">
        {certifications.map((item) => (
          <Entry key={item.title} {...item} />
        ))}
      </Section>

      <Section title="Skills">
        <div className="grid sm:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="font-semibold text-box">{group.group}</h3>
              <ul className="mt-2 space-y-1 text-soft">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}