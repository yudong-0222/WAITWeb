import Hero from "./section/Hero";
import Navbar from "./components/Navbar";
import Modes from "./section/Modes";
import Map from "./section/Map";
import Join from "./section/Join";
import Footer from "./section/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Modes />
      <Map />
      <Join />
      <Footer />
    </>
  );
}
