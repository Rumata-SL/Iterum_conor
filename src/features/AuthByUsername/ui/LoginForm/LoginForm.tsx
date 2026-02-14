import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input";
import {memo, useCallback} from "react";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {loginByUserName} from "../../model/services/loginByUserName/loginByUserName";
import {Text} from "shared/ui/Text";
import {TextTheme} from "shared/ui/Text/ui/Text";
import {getLoginError, getLoginIsLoading, getPassword, getUserName} from "features/AuthByUsername";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useAppSelector} from "shared/lib/hooks/useAppSelector";

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = ({className, onSuccess}: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const username = useAppSelector(getUserName);

    const password = useAppSelector(getPassword);
    const isLoading = useAppSelector(getLoginIsLoading);
    const error = useAppSelector(getLoginError);
    const {t} = useTranslation();


    const onUserNameHandler = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onUserPasswordHandler = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);


    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUserName({username, password}));
        if (result.meta.requestStatus === "fulfilled") {
            console.log(result);
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

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