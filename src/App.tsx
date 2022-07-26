import './App.scss';
import './pages/Lista/lista.scss';
import Lista from './pages/Lista';
import Admin from './pages/Admin';
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = { <Lista /> } />
        <Route path="/admin/:id" element = { <Admin /> } />
      </Routes>
    </BrowserRouter>
  );
}
