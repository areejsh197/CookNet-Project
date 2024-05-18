import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Signinup from "./Pages/Signinup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pages/About" element={<About />} />
          <Route path="/Pages/Contact" element={<Contact />} />
          <Route path="/Pages/Service" element={<Service />} />
          <Route path="/Pages/Signinup" element={<Signinup />} />
          <Route path="/Pages/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
