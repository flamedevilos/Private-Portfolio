import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Informations from "./pages/Informations";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import BackTopBtn from "./components/BackTopBtn";
import ScrollLinked from "./components/ScrollLinked";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Coockie from "./components/Coockie";

function App() {
  return (
    <>
      <div className="App" data-testid="application">
        <Coockie />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Informations" element={<Informations />} />
          <Route path="Features" element={<Features />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <BackTopBtn />
        <ScrollLinked />
        <Footer />
      </div>
    </>
  );
}

export default App;
