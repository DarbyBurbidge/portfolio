import { BrowserRouter, Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes"
import { Header } from "./Header"
import "./Styles/Body.css"
import { Contact } from "./Routes/Contact.route";
import { Footer } from "./Footer";
import { About } from "./Routes/About.route";
import { Home } from "./Routes/Home.route";
import { Projects } from "./Routes/Projects.route";
import React from "react";

export const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Header />
          <SlideRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </SlideRoutes>
        <Footer />
      </BrowserRouter>
  );
};

