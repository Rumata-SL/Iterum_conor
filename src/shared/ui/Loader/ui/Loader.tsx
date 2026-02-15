import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";
import {ReactNode} from "react";

export interface LoaderProps {
    className?: string;
    children?: ReactNode;
}

export const Loader = ({className}: LoaderProps) => {
    return (
        <div className={classNames(cls.Loader, {}, [className])}>
        </div>
    );
};