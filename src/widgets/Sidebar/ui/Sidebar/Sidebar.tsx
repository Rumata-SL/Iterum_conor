import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {memo, useState} from "react";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {LangSwitcher} from "shared/ui/LangSwitcher";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {SidebarItemList} from "widgets/Sidebar/model/items";
import {SidebarItem} from "widgets/Sidebar/ui/SidebarItem/SidebarItem";

export interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
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

            <div className={classNames(cls.items)}>
                {SidebarItemList.map(item => {
                    return <SidebarItem key={item.path} item={item} collapsed={collapsed}/>;
                })}
            </div>

            <div className={cls.switchers}>
                <LangSwitcher className={cls.lang}/>
                <ThemeSwitcher/>
            </div>
        </div>

    );
});

Sidebar.displayName = "Sidebar";