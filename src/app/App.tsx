import React from 'react';
import {Link} from "react-router-dom";
import  "./styles/index.scss"
import {classNames} from "shared/lib/classNames/ClassNames";
import {UseTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";



export const App = () => {
const  { theme, toggleTheme} = UseTheme();

    return (
        <div className={classNames("app", {}, [theme] )}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
                <AppRouter/>
        </div>
    );
};
