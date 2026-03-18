import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Gallery from "./pages/Gallery";
import ContactPartner from "./pages/ContactPartner";
import Features from "./pages/Features";
import Services from "./pages/Services";
import PopularSearch from "./pages/PopularSearch";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />
      <Destinations />
      <Services/>
       <Features/>
       <PopularSearch />
         <Gallery />
       <ContactPartner />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
