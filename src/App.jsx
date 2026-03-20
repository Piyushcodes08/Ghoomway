import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import "./index.css";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import ScrollToTop from "./components/ScrollToTop";

const AboutPage = lazy(() => import("./pages/inner/AboutPage"));
const ServicesPage = lazy(() => import("./pages/inner/ServicesPage"));
const DestinationsPage = lazy(() => import("./pages/inner/DestinationsPage"));
const ContactPage = lazy(() => import("./pages/inner/ContactPage"));

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="destinations" element={<DestinationsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;