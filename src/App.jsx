import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Read from "./pages/ReadPage";
import Update from "./pages/UpdatePage";
import Single from "./pages/SingelBlogPage";
import Create from "./pages/CreatePage";
import AppNavBar from './components/common/AppNavBar';
import UpdatePage from './pages/UpdatePage';
const App = () => {
  return (
    <div>
       <BrowserRouter>
       <AppNavBar/>
                <Routes>
                    <Route element={<Read/>}  path="/"/>
                    <Route element={<Single/>} path="/post/:id"/>
                    <Route element={<Create/>} path="/create"/>
                    <Route element={<Update/>} path="/edit/:id"/>
                </Routes>
            </BrowserRouter>
    </div>
  );
};

export default App;