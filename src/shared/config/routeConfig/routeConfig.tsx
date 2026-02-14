import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {ProfilePage} from "pages/ProfilePage";

export enum AppRouter {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",

    // Last
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: "/",
    [AppRouter.ABOUT]: "/about",
    [AppRouter.PROFILE]: "/profile",
    [AppRouter.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
    },
    [AppRouter.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRouter.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>
    },
    // Last
    [AppRouter.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
};

