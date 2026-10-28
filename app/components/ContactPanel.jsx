'use client'

import { useEffect, useState } from "react";

const EMAIL = "shadaabhasan7@gmail.com";

// The current time in Galway, updated every 30 seconds
function useGalwayTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-IE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Dublin" }).format(new Date())
      );
    update();
    const timer = setInterval(update, 30000);
    return () => clearInterval(timer);
  }, []);

  return time;
}

export default function ContactPanel() {
  const time = useGalwayTime();
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // go back to "Copy email" after 2 seconds
    } catch {
      // If copying isn't allowed, open the mail app instead
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <section id="contact" className="contact-panel sticky bottom-0 z-0 min-h-[100svh] px-[4vw] pt-8 pb-7 flex flex-col">
      <div className="flex flex-col md:flex-row md:justify-between gap-1 text-[15px] opacity-60">
        <span>Galway, Ireland{time && ` · ${time}`}</span>
        <span>Open to data scientist roles</span>
      </div>

      <h2 className="mt-auto text-[clamp(64px,13vw,210px)] font-extrabold tracking-[-0.05em] leading-[0.9]">
        Get in touch.
      </h2>

      <div className="mt-14 grid md:grid-cols-2 gap-10 md:items-end">
        <p className="text-xl leading-relaxed max-w-[26em] opacity-80">
          Hiring for a data science role, or want to know more about one of my projects? Send me an email.
        </p>

        <div>
          <a
            href={`mailto:${EMAIL}`}
            className="text-[clamp(24px,3.2vw,48px)] font-bold tracking-[-0.02em] underline underline-offset-8 decoration-2 break-all"
          >
            {EMAIL}
          </a>
          <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2">
            <button onClick={copyEmail} className="font-semibold underline underline-offset-4" aria-live="polite">
              {copied ? "Copied!" : "Copy email"}
            </button>
            <a href="https://www.linkedin.com/in/shadaab-hasan-4a9b92271/" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100">
              LinkedIn
            </a>
            <a href="https://github.com/ShadaabHasan" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100">
              GitHub
            </a>
            <a href="/Shadaab_resume.pdf" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100">
              CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}