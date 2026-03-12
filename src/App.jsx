import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import CarCursor from './components/CarCursor';

const App = () => {
  return (
    <BrowserRouter>
    <CarCursor/>
      <Header />
      <Home />
      <Features/>
      <About />
    </BrowserRouter>
  );
};

export default App;
