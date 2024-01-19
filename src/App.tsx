import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Navbar />
          <Routes></Routes>
          <Content />
          <Skills />
          <Projects />
          <Contact />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
