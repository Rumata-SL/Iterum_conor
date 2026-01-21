import React from 'react';
import  "./styles/index.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {UseTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";



export const App = () => {
const  { theme, toggleTheme} = UseTheme();

    return (
        <div className={classNames("app", {}, [theme] )}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
};
