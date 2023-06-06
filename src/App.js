import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import HelloPage from './HelloPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/HelloPage/" element={<HelloPage />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
