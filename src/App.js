import AboutHome from "./components/aboutHome/AboutHome";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Review from "./components/reviews/Review";
import SectionCard from "./components/sectionCard/SectionCard";
import SupportedBrowser from "./components/supportedBrowser/SupportedBrowser";

function App() {
  return (
    <div className="bg-[#0e0f1a] min-h-screen flex flex-col">
      <Navbar />
      <div className="mainContent flex-grow overflow-y-scroll">
        <AboutHome />
        <Review />
        <SectionCard />
        <SupportedBrowser />
        <Features />
        <Footer />
      </div>
    </div>
  );
}

export default App;
