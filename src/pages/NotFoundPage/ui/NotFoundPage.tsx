import {classNames} from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
import {useTranslation} from "react-i18next";
import {ReactNode} from "react";

export interface NotFoundPageProps {
    className?: string;
    children?: ReactNode;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t("Страница не найдена")}
        </div>
    );
};