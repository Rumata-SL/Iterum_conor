import {SVGProps, VFC} from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import HomeIcon from "shared/assets/icons/Home.svg";
import AboutIcon from "shared/assets/icons/About.svg";
import ProfileIcon from "shared/assets/icons/ProfileIcon.svg";

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;

}

export const SidebarItemList: SidebarItemType[] = [
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
    {
        path: RoutePath.profile,
        text: "Профиль",
        Icon: ProfileIcon,
        authOnly: true,
    },
];