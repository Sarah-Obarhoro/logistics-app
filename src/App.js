import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AltNavbar from "./components/NavbarBlack";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Logistics from "./pages/Logistics";
import Freight from "./pages/Freight";
import Delivery from "./pages/Delivery";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home setCurrentPage={handlePageChange} />;
      case "Logistics":
        return <Logistics setCurrentPage={handlePageChange} />;
        case "Freight":
          return <Freight setCurrentPage={handlePageChange} />;
        case "Delivery":
          return <Delivery setCurrentPage={handlePageChange} />;
        case "About":
          return <About setCurrentPage={handlePageChange} />;
        case "FAQ":
          return <FAQ setCurrentPage={handlePageChange} />;  

      default:
        return <Home setCurrentPage={handlePageChange} />;
    }
  };

  const pagesWithAltNavbar = ["Logistics", "About", "FAQ"];

  return (
    <div className="flex flex-col h-screen">
      {/* Conditionally Render Navbar */}
      {pagesWithAltNavbar.includes(currentPage) ? (
        <AltNavbar setCurrentPage={handlePageChange} currentPage={currentPage} />
      ) : (
        <Navbar setCurrentPage={handlePageChange} currentPage={currentPage} />
      )}

      {/* Main Content */}
      <div className="flex-grow">{renderPage()}</div>

      {/* Footer */}
      <Footer setCurrentPage={handlePageChange} currentPage={currentPage} />
    </div>
  );
};

export default App;