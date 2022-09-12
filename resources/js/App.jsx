import './bootstrap';
import '../css/app.css'
import * as React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Page/Home';
import AddUser from './Page/AddUser';
import EditUser from './Page/EditUser';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-user" element={<AddUser/>}/>
                <Route path="/edit-user" element={<EditUser/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
