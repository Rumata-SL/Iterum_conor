import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {memo, ReactNode, useMemo, useState} from "react";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {LangSwitcher} from "shared/ui/LangSwitcher";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {SidebarItem} from "widgets/Sidebar/ui/SidebarItem/SidebarItem";
import {getSidebarItemsList} from "widgets/Sidebar/model/selectors/getSidebarItems";
import {useAppSelector} from "shared/lib/hooks/useAppSelector";

export interface SidebarProps {
    className?: string;
    children?: ReactNode;
}

export const Sidebar = memo(({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useAppSelector(getSidebarItemsList);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    const itemList = useMemo(() => {
        return (
            sidebarItemsList.map(item => {
                return <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />;
            })
        );
    }, [collapsed, sidebarItemsList]);

    return (
        <div
            data-testid={"sidebar"}
            className={classNames(cls.Sidebar, {
                [cls.collapsed]: collapsed,
            }, [className])}
        >
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
                {itemList}
            </div>

            <div className={cls.switchers}>
                <LangSwitcher className={cls.lang}/>
                <ThemeSwitcher/>
            </div>
        </div>

    );
});

Sidebar.displayName = "Sidebar";