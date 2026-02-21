import React, {Suspense, useEffect} from "react";
import "./styles/index.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {getIsInit, userActions} from "entities/User";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useAppSelector} from "shared/lib/hooks/useAppSelector";

export const App = () => {
    const dispatch = useAppDispatch();
    const isInit = useAppSelector(getIsInit);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback={""}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    {isInit && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    );
};
