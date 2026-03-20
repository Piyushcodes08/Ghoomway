import { Suspense, lazy } from "react";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Destinations = lazy(() => import("./pages/Destinations"));
const Features = lazy(() => import("./pages/Features"));
const PopularSearch = lazy(() => import("./pages/PopularSearch"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ContactPartner = lazy(() => import("./pages/ContactPartner"));
const Footer = lazy(() => import("./components/Footer"));

const SectionFallback = () => <div className="h-24" />;

const App = () => {
  return (
    <>
      <Header />
      <Home />

      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Destinations />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Features />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PopularSearch />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ContactPartner />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;