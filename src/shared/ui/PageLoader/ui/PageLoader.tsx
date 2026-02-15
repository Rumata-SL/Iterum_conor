import {classNames} from "shared/lib/classNames/classNames";
import cls from "./PageLoader.module.scss";
import {Loader} from "shared/ui/Loader";
import {ReactNode} from "react";

export interface PageLoaderProps {
    className?: string;
    children?: ReactNode;
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
};