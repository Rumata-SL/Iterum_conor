import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

export interface NavbarProps  {
    className?: string;
}

export const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={classNames(cls.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.mainLink)} to={RoutePath.main}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>О сайте</AppLink>
            </div>
        </div>
    );
};
