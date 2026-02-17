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

export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY
    } = props;
    const mod: Mods = {
        [cls[theme]]: true,
        [cls[align]]: align,
    };

    return (
        <div className={classNames(cls.Text, mod, [className, theme])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};