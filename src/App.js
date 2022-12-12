import Home from "./pages/Home";
import Divider from "./components/Divider";
import Skills from "./components/Skills";
import About from "./pages/About";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Divider />
      <Skills />
      <About />
      <Divider />
      <Products />
      <Divider />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
