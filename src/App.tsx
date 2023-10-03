import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contacts";
import EmptyState from "./pages/emptystate";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./pages/products";
import MoreProductDetails from "./components/MoreProductDetails/MoreProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/empty" element={<EmptyState />} />
          <Route path="/product/:id" Component={MoreProductDetails} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
