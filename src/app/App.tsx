import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import  "./styles/index.scss"
import {classNames} from "shared/lib/classNames/ClassNames";
import {UseTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";



export const App = () => {
const  { theme, toggleTheme} = UseTheme();

    return (
        <div className={classNames("app", {}, [theme] )}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
                <Suspense fallback={<div>...Loading</div>}>
                    <Routes>
                        <Route path="/about" element={<AboutPage/>}></Route>
                        <Route path="/" element={<MainPage/>}></Route>
                    </Routes>
                </Suspense>
        </div>
    );
};
