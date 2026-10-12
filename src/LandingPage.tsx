import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Legacy from "./components/Legacy";
import News from "./components/News";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Announcements from "./components/Announcements";
import StaffSection from "./components/StaffSection";
import StudentGallery from "./components/StudentGallery";
import ContactModal from "./components/ContactModal";
import useContactModal from "./hooks/useContactModal";

const LandingPage = () => {
  const { isOpen, open, close } = useContactModal();

  return (
    <div className="min-h-screen bg-[#e2dfdf]">
      <Navbar onContactClick={open} />
      <Hero onContactClick={open} />
      <About />
      <Experience />
      <Legacy />
      <StaffSection />
      <Announcements />
      <StudentGallery />
      <News />
      <Events />
      <Footer />
      <ContactModal isOpen={isOpen} onClose={close} />
    </div>
  );
};

export default LandingPage;
