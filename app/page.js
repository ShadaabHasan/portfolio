import Home1 from "./components/Home1";
import Aboutme1 from "./components/Aboutme1";
import FeaturedProjects from "./components/FeaturedProjects";
import Footer from "./components/Footer";
import Scrollup from "./components/Scrollup";
import BottomMargin from "./components/BottomMargin";

export default function Home() {
  return (
    <div className="total-bg text-white">
      <BottomMargin offset={400}>
        <div className="bg-gradient-to-br from-slate-900 to-emerald-900 shadow-xl ring-gray-900/5 text-white rounded-b-3xl">
          <Home1 />
          <Aboutme1 />
          <FeaturedProjects />
          <Scrollup />
        </div>
      </BottomMargin>
      <Footer />
    </div>
  );
}