import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
function App() {
  return (
    <div >
      <BrowserRouter basename="/blog">
      <Routes>
      <Route path="/*" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
