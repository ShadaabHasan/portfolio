// The first screen: headline, a small info line, and my name across the full width
export default function Hero() {
  return (
    <section className="min-h-[calc(100svh-104px)] px-[4vw] flex flex-col overflow-hidden">
      <div className="flex-1 grid md:grid-cols-[1.1fr_1fr] gap-10 pt-[6vh] md:pt-[9vh]">
        <p className="text-[clamp(30px,3.6vw,54px)] leading-[1.22] font-medium tracking-[-0.02em] max-w-[17em]">
          I train models that find and follow objects in images, then I check that their results really hold up.
        </p>

        <p className="md:col-start-2 self-end flex flex-wrap md:justify-end gap-x-7 gap-y-2 pb-[2vh] text-[13px] md:text-[15px] font-semibold uppercase tracking-[0.02em]">
          <span>Data scientist</span>
          <span className="text-muted font-normal">+</span>
          <span>M.Sc. Data Analytics</span>
          <span className="text-muted font-normal">+</span>
          <span>Galway, Ireland</span>
        </p>
      </div>

      <h1 className="font-extrabold tracking-[-0.055em] leading-[0.88] text-[24vw] md:text-[13.4vw] md:whitespace-nowrap -mx-[0.03em] pb-[3vh]">
        Shadaab Hasan
      </h1>
    </section>
  );
}