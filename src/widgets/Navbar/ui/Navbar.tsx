import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Modal} from "shared/ui/Modal";
import React, {useCallback, useState} from "react";

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation("nav");
    const [isAuth, setIsAuth] = useState<boolean>(false);


    const toggleAuth = useCallback(() => {
        setIsAuth(prev => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={toggleAuth}
            >
                {t("Войти")}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuth} onClose={toggleAuth}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur cum dignissimos dolores
                ducimus eligendi excepturi illo laboriosam maiores, minus molestias numquam, optio possimus quaerat,
                quasi quos saepe sunt tempora.
            </Modal>
        </div>
    );
};
