import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import {ButtonHTMLAttributes, FC} from "react";

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    OUTLINE_RED = "outlineRed",
    OUTLINE_GREEN = "outlineGreen",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",

}


export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",


}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ButtonTheme.OUTLINE,
        children,
        square,
        size = ButtonSize.M,
        disabled,
        ...rest
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,

    };
    return (
        <button className={classNames(cls.Button, mods, [className])} disabled={disabled} {...rest}>
            {children}
        </button>
    );
};