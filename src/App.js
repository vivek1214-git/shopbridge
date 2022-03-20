import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Navbar from "./Components/Layout/Navbar";
import ViewData from "./Components/ShopbridgeData/ViewData";
import AddData from "./Components/ShopbridgeData/AddData";
import EditData from "./Components/ShopbridgeData/EditData";

import { BrowserRouter , Routes, Route } from "react-router-dom";
function App() {
  return (
    <> <Navbar />
    <BrowserRouter>
       
        <Routes>
          <Route  path="/" element={<Home />}></Route>
          <Route  path="/about" element={<About />}></Route>
          <Route  path="/contact" element={<Contact />}></Route>
          <Route  path="/shopbridges/add" element={<AddData/>}></Route>
          <Route  path="/shopbridges/edit/:id" element={<EditData/>}></Route>
          <Route  path="/view/:id" element={<ViewData/>}></Route>
        </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
