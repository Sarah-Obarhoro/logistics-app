import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AltNavbar from "./components/NavbarBlack";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Logistics from "./pages/Logistics";
import Freight from "./pages/Freight";
import Delivery from "./pages/Delivery";
import About from "./pages/About";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "Logistics":
        return <Logistics setCurrentPage={setCurrentPage} />;
        case "Freight":
          return <Freight setCurrentPage={setCurrentPage} />;
        case "Delivery":
          return <Delivery setCurrentPage={setCurrentPage} />;
        case "About":
          return <About setCurrentPage={setCurrentPage} />;

      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  const pagesWithAltNavbar = ["Logistics", "About"];

  return (
    <div className="flex flex-col h-screen">
      {/* Conditionally Render Navbar */}
      {pagesWithAltNavbar.includes(currentPage) ? (
        <AltNavbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      ) : (
        <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      )}

      {/* Main Content */}
      <div className="flex-grow">{renderPage()}</div>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

export default App;