import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input";
import {useState} from "react";

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation();
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");


    const userNameHandler = (value: string) => {
        setUserName(value);
    };
    const userPasswordHandler = (value: string) => {
        setUserPassword(value);
    };


    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                autoFocus
                className={cls.input}
                type={"text"}
                value={userName}
                onChange={userNameHandler}
                placeholder={t("Введите username")}
            />
            <Input
                className={cls.input}
                type={"password"}
                value={userPassword}
                onChange={userPasswordHandler}
                placeholder={t("Введите пароль")}
            />
            <Button className={cls.loginBtn}>
                {t("Войти")}
            </Button>
        </div>
    );
};