import './bootstrap';
import '../css/app.css'
import  React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import View from './page/View';
import {apiUser} from "./store/queries/apiUser";
const Home = React.lazy(() => import('./Page/Home'));
const AddUser = React.lazy(() => import('./Page/AddUser'));
const EditUser = React.lazy(() => import('./Page/EditUser'));


ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <Provider store={store} api={apiUser}>
            <HashRouter>
                <Suspense fallback={<div>Need wait because of loading.......</div>}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/add-user" element={<AddUser/>}/>
                        <Route path="/edit-user/:id" element={<EditUser/>}/>
                        <Route path="/view" element={<View/>}/>
                    </Routes>
                </Suspense>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);
