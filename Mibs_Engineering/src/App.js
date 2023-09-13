import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Product from "./Pages/product";
import Services from "./Pages/services";
import Contact from "./Pages/contact";
import Home from "./Pages/Home";
// import Index from "./Pages/Index";

function App() {
  return (
    <>
      <BrowserRouter basename="/Mibs_Engneering_react">
        <Routes>
          {/* <Route path={"/"} element={<Index />} /> */}
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/About"} element={<About />} />
          <Route path={"/Contact"} element={<Contact />} />
          <Route path={"/Product"} element={<Product />} />
          <Route path={"/Services"} element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
