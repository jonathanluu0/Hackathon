import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Homepage from './Homepage';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="app" element={<App />} />
        </Routes>
    </BrowserRouter>

);
