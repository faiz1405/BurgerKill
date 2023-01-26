import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Foods from "./components/Foods";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foods />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
