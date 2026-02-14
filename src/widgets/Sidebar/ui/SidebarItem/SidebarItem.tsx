import {classNames} from "shared/lib/classNames/classNames";
import cls from "./SidebarItem.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {SidebarItemType} from "../../model/items";
import {memo} from "react";

export interface SidebarItemProps {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarItem = memo(({item, collapsed}: SidebarItemProps) => {
    const {t} = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, {[cls.collapsed]: collapsed}, [])}
            to={item.path}
        >
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>{t(item.text)}</span>
            {/*{!collapsed && <span className={classNames(cls.link)}>{t("О сайте")}</span>}*/}
        </AppLink>
    );
});

SidebarItem.displayName = "SidebarItem";
