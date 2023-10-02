import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
