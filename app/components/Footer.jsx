import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 py-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-muted">
        <p>©{new Date().getFullYear()} Shadaab Hasan. Galway, Ireland.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;