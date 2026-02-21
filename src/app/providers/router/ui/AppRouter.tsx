import React, {Suspense, useCallback} from "react";
import {Route, Routes} from "react-router-dom";
import {AppRouteProps, routeConfig} from "shared/config/routeConfig/routeConfig";
import {PageLoader} from "shared/ui/PageLoader/ui/PageLoader";
import {RequireAuth} from "app/providers/router/ui/RequireAuth";

export const AppRouter = () => {

    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader/>}>
                <div className="page-wrapper">{route.element}</div>
            </Suspense>
        );
        return <Route
            key={route.path}
            path={route.path}
            element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        >
        </Route>;
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};
