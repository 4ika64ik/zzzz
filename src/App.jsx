import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vnzh from './pages/Vnzh/Vnzh.jsx';
import Home from "./pages/Home.jsx";
import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

export default function App() {
    useEffect(() => {
        // Замените 'YOUR_PIXEL_ID' на ваш собственный ID пикселя
        const pixelId = '885387376693813'; 
        ReactPixel.init(pixelId);
        ReactPixel.pageView();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vnzh" element={<Vnzh />} />
            </Routes>
        </Router>
    );
}
