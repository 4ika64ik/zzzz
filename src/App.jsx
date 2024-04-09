import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vnzh from './pages/Vnzh/Vnzh.jsx'
import Home from "./pages/Home.jsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vnzh" element={<Vnzh />} />
            </Routes>
        </Router>
    );
}
