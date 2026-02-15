import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import React, {ReactNode, useCallback, useState} from "react";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";
import {useAppSelector} from "shared/lib/hooks/useAppSelector";

export interface NavbarProps {
    className?: string;
    children?: ReactNode;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation("nav");
    const dispatch = useDispatch();
    const authData = useAppSelector(getUserAuthData);
    const [isAuth, setIsAuth] = useState<boolean>(false);


    const onCloseModal = useCallback(() => {
        setIsAuth(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuth(true);
    }, []);

    const onLogout = useCallback(() => {
        onCloseModal();
        dispatch(userActions.logout());
    }, [dispatch, onCloseModal]);

    return (
        <>
            {authData ? (<div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    className={cls.links}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLogout}
                >
                    {t("Выйти")}
                </Button>
            </div>) :
                (<div className={classNames(cls.Navbar, {}, [className])}>
                    <Button
                        className={cls.links}
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onShowModal}
                    >
                        {t("Войти")}
                    </Button>
                    {isAuth && <LoginModal isOpen={isAuth} onClose={onCloseModal}/>}
                </div>)
            }
        </>
    );
};
