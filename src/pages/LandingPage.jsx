import { Suspense, lazy } from "react";
import Home from "./Home";

const About = lazy(() => import("./About"));
const Services = lazy(() => import("./Services"));
const Destinations = lazy(() => import("./Destinations"));
const Features = lazy(() => import("./Features"));
const PopularSearch = lazy(() => import("./PopularSearch"));
const Gallery = lazy(() => import("./Gallery"));
const ContactPartner = lazy(() => import("./ContactPartner"));

const SectionFallback = () => <div className="h-24" />;

const LandingPage = () => {
  return (
    <>
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
    </>
  );
};

export default LandingPage;
