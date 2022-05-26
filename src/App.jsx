import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import NavLinkPer from "./components/NavLinkPer";

function App() {
  return (
    <div className="App">
      <header>
        <h1>🛒Fake Store🛒</h1>
        <nav>
          <ul>
            <li>
              <NavLinkPer to="/">Home</NavLinkPer>
            </li>
            <li>
              <NavLinkPer to="/about">About</NavLinkPer>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalle/:idObject" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
