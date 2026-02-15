import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {memo, ReactNode, useMemo} from "react";


export interface ThemeSwitcherProps {
    className?: string;
    children?: ReactNode;
}

export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    const icon = useMemo(() => {
        return theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>;
    }, [theme]);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
        >
            {/*{theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}*/}
            {icon}
        </Button>
    );
});

ThemeSwitcher.displayName = "ThemeSwitcher";