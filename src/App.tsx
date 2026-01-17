import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import  "./styles/index.scss"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {UseTheme} from "./theme/useThenme";



export const App = () => {
const  { theme, toggleTheme} = UseTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
                <Suspense fallback={<div>...Loading</div>}>
                    <Routes>
                        <Route path="/about" element={<AboutPageAsync/>}></Route>
                        <Route path="/" element={<MainPageAsync/>}></Route>
                    </Routes>
                </Suspense>
        </div>
    );
};
