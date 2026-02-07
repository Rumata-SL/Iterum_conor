import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input";
import {memo, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {loginByUserName} from "../../model/services/loginByUserName/loginByUserName";
import {Text} from "shared/ui/Text";
import {TextTheme} from "shared/ui/Text/ui/Text";
import {getLoginError, getLoginIsLoading, getPassword, getUserName} from "features/AuthByUsername";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader";


export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = ({className}: LoginFormProps) => {
    const dispatch = useDispatch();
    const username = useSelector(getUserName);
    const password = useSelector(getPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const {t} = useTranslation();


    const onUserNameHandler = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onUserPasswordHandler = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);


    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({username, password}));
    }, [dispatch, password, username]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t("Авторизация")}/>
                <Input
                    autoFocus
                    className={cls.input}
                    type={"text"}
                    value={username}
                    onChange={onUserNameHandler}
                    placeholder={t("Введите username")}
                />
                <Input
                    className={cls.input}
                    type={"password"}
                    value={password}
                    onChange={onUserPasswordHandler}
                    placeholder={t("Введите пароль")}
                />
                {error && <Text text={t(error)} theme={TextTheme.ERROR}/>}
                <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn} onClick={onLoginClick}
                    disabled={isLoading}>
                    {t("Войти")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(LoginForm);