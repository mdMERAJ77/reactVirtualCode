import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import Shop from "./pages/shop/Shop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
