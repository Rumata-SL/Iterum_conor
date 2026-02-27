import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export enum TextAlign {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

export enum TextSize {
    S = "size_s",
    M = "size_m",
    L = "size_l",
}

export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
        size = TextSize.M,
    } = props;
    const mod: Mods = {
        [cls[theme]]: true,
        [cls[align]]: align,
        [cls[size]]: size,
    };

    return (
        <div className={classNames(cls.Text, mod, [className, theme])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};