import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar/Navbar"
import RequiredAuth from "./hoc/RequiredAuth";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<RequiredAuth><Home/></RequiredAuth>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
