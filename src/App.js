import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import ContactPage from './ContactPage';
import SobreNos from './SobreNos';
import ProductDetails from './ProductDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/SobreNos/" element={<SobreNos />} />
          <Route path="/product-details" component={ProductDetails} />
          <Route path="/ContactPage/" element={<ContactPage />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
