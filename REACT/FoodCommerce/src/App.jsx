// import React from 'react'
import "./App.css";
import NavBar from "./components/nav/navbar";
import Recommended from "./pages/recommended/recommended";
import HeroPage from "./pages/heropage/heropage";
import BestSeller from "./pages/bestseller/bestseller";
import BestSeller2 from "./pages/bestseller/bestseller(2)";

function App() {
  return (
    <>
      <NavBar />
      <HeroPage />
      <Recommended />
      <BestSeller />
      <BestSeller2 />
    </>
  );
}

export default App;
