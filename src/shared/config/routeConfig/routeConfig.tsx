import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {ProfilePage} from "pages/ProfilePage";
import {ArticlesPage} from "pages/ArticlesPage";
import {ArticleDetailPage} from "pages/ArticleDetailPage";

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRouter {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "article_details",

    // Last
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: "/",
    [AppRouter.ABOUT]: "/about",
    [AppRouter.PROFILE]: "/profile/",
    [AppRouter.ARTICLES]: "/articles",
    [AppRouter.ARTICLE_DETAILS]: "/articles/",//+ id
    [AppRouter.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRouter, AppRouteProps> = {
    [AppRouter.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
    },
    [AppRouter.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRouter.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage/>,
        authOnly: true,
    },
    [AppRouter.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage/>,
        authOnly: true,
    },
    [AppRouter.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailPage/>,
        authOnly: true,
    },
    // Last
    [AppRouter.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
};

