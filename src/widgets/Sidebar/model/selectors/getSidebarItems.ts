import {createSelector} from "@reduxjs/toolkit";
import {getUserAuthData} from "entities/User";
import {SidebarItemType} from "widgets/Sidebar/model/types/sidebar";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import HomeIcon from "shared/assets/icons/Home.svg";
import AboutIcon from "shared/assets/icons/About.svg";
import ProfileIcon from "shared/assets/icons/ProfileIcon.svg";
import ArticlesIcon from "shared/assets/icons/Articles.svg";

export const getSidebarItemsList = createSelector(getUserAuthData, (userData) => {
    const sidebarItemList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            text: "Главная страница",
            Icon: HomeIcon,
        },
        {
            path: RoutePath.about,
            text: "О сайте",
            Icon: AboutIcon,
        },

    ];

    if (userData) {
        sidebarItemList.push({
            path: `${RoutePath.profile}${userData.id}`,
            text: "Профиль",
            Icon: ProfileIcon,
            authOnly: true,
        },
        {
            path: RoutePath.articles,
            text: "Статьи",
            Icon: ArticlesIcon,
            authOnly: true,
        },);
    }

    return sidebarItemList;
});