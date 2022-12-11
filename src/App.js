import Home from "./pages/Home";
import Divider from "./components/Divider";
import Skills from "./components/Skills";
import About from "./pages/About";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Home />
      <Divider />
      <Skills />
      <About />
      <Divider />
      <Products />
    </div>
  );
}

export default App;
