import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import React from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

export interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const {t, i18n} = useTranslation();

    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <div>
            <Button
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={toggleLanguage}
            >
                {t("Язык")}
            </Button>
        </div>
    );
};