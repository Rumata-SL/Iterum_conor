import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ErrorPage.module.scss";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {ReactNode} from "react";

export interface ErrorPageProps {
    className?: string;
    children?: ReactNode;
}

export const ErrorPage = ({className}: ErrorPageProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <div>{t("Произошла непредвиденная ошибка")}</div>
            <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
        </div>
    );
};