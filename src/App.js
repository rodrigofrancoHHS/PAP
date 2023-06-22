import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import ContactPage from './ContactPage';
import SobreNos from './SobreNos';
import ProductDetails from './ProductDetails';
import MenuSweats from './MenuSweats';
import MenuTshirts from './MenuTshirts';
import MenuCaps from './MenuCaps';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/SobreNos" element={<SobreNos />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/MenuSweats" element={<MenuSweats />} />
          <Route path="/MenuTshirts" element={<MenuTshirts />} />
          <Route path="/MenuCaps" element={<MenuCaps />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
