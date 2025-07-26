import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";
// import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/scss-testing" element={<Home />} />
        <Route path="/scss-testing/about" element={<About />} />
        <Route path="/scss-testing/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
