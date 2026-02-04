import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import React, {useCallback, useState} from "react";
import {LoginModal} from "features/AuthByUsername";

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation("nav");
    const [isAuth, setIsAuth] = useState<boolean>(false);


    const onCloseModal = useCallback(() => {
        setIsAuth(false);
    }, []);
    const onShowModal = useCallback(() => {
        setIsAuth(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t("Войти")}
            </Button>
            <LoginModal isOpen={isAuth} onClose={onCloseModal}/>
        </div>
    );
};
