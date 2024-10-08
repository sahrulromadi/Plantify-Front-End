import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/HomeSection.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-green-950 min-h-screen">
        <Home />
      </main>
    </>
  );
}

export default App;
