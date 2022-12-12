import Home from "./pages/Home";
import Divider from "./components/Divider";
import Skills from "./components/Skills";
import About from "./pages/About";
import Products from "./components/Products";
import Services from "./components/Services";

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
    </div>
  );
}

export default App;
