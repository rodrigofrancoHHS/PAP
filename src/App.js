import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import HelloPage from './HelloPage';
import ContactPage from './ContactPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/ContactPage/" element={<ContactPage />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
