import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import HomeIcon from "shared/assets/icons/Home.svg";
import AboutIcon from "shared/assets/icons/About.svg";
import {LangSwitcher} from "shared/ui/LangSwitcher";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

export interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div data-testid={"sidebar"} className={classNames(cls.Sidebar, {
            [cls.collapsed]: collapsed,

        }, [className])}>
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                size={ButtonSize.L}
                square
                onClick={onToggle}
            >
                {collapsed ? ">" : "<"}
            </Button>

            <div className={classNames(cls.items,)}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                    to={RoutePath.main}
                >
                    <HomeIcon className={cls.icon}/>
                    <div
                        className={classNames(cls.link, {[cls.unCollapsed]: !collapsed}, [])}>{t("Главная страница")}</div>
                    {/*{!collapsed && <span className={classNames(cls.link)}>{t("Главная страница")}</span>}*/}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                    to={RoutePath.about}
                >
                    <AboutIcon className={cls.icon}/>
                    <div className={classNames(cls.link, {[cls.unCollapsed]: !collapsed}, [])}>{t("О сайте")}</div>
                    {/*{!collapsed && <span className={classNames(cls.link)}>{t("О сайте")}</span>}*/}
                </AppLink>
            </div>

            <div className={cls.switchers}>
                <LangSwitcher className={cls.lang}/>
                <ThemeSwitcher/>
            </div>
        </div>

    );
};