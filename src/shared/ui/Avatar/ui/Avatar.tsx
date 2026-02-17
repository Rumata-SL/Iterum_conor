import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Avatar.module.scss";
import {CSSProperties, useMemo} from "react";

export interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({className, src, size = 100, alt}: AvatarProps) => {
    const mods: Mods = {};

    const style: CSSProperties = useMemo(() => {
        return {
            width: `${size}px`,
            height: `${size}px`,
        };
    }, [size]);

    return (
        <img
            src={src}
            className={classNames(cls.Avatar, mods, [className])}
            style={style}
            alt={alt}
        >
        </img>
    );
};