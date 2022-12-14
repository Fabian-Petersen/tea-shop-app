import Home from "./pages/Home";
import Divider from "./components/Divider";
import Skills from "./components/Skills";
import About from "./pages/About";
import Products from "./components/ProductList";
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
      <Services />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
