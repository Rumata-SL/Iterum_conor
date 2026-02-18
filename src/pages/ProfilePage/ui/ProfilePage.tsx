import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader";
import {profileActions, profileReducer} from "entities/Profile/model/slice/profileSlice";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {ReactNode, useCallback, useEffect} from "react";
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidateErrors,
    ProfileCard,
    ProfileKey
} from "entities/Profile";
import {classNames} from "shared/lib/classNames/classNames";
import {useAppSelector} from "shared/lib/hooks/useAppSelector";
import {ProfilePageHeader} from "../ui/ProfilePageHeader/ProfilePageHeader";
import {Text} from "shared/ui/Text";
import {TextTheme} from "shared/ui/Text/ui/Text";
import {useTranslation} from "react-i18next";
import {ValidateProfileError} from "entities/Profile/model/types/profile";

export interface ProfilePageProps {
    className?: string;
    children?: ReactNode;
    disableApiCalls?: boolean;
}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = ({className, disableApiCalls}: ProfilePageProps) => {
    const {t} = useTranslation("profile");
    const dispatch = useAppDispatch();
    const form = useAppSelector(getProfileForm);
    const isLoading = useAppSelector(getProfileIsLoading);
    const error = useAppSelector(getProfileError);
    const readOnly = useAppSelector(getProfileReadOnly);
    const validateErrors = useAppSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
        [ValidateProfileError.INCORRECT_AGE]: t("Не корректный возраст"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Не корректный регион"),
        [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
        [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка"),
    };


    useEffect(() => {
        if (!disableApiCalls) {
            dispatch(fetchProfileData());
        }
    }, [dispatch, disableApiCalls]);

    const handleTextChange = useCallback((
        field: ProfileKey,
        value: string
    ) => {
        dispatch(profileActions.updateProfileField({field, value}));
    }, [dispatch]);

    const handleNumberChange = (field: ProfileKey, value: string) => {
        const numValue = value ? Number(value) : 0;
        dispatch(profileActions.updateProfileField({field, value: numValue}));
    };

    return (<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames("", {}, [className])}>
            <ProfilePageHeader/>
            {validateErrors?.length && validateErrors?.map((err) => (
                <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslates[err]}/>))
            }
            <ProfileCard
                form={form}
                handleTextChange={handleTextChange}
                handleNumberChange={handleNumberChange}
                isLoading={isLoading}
                error={error}
                readOnly={readOnly}
            />
        </div>
    </DynamicModuleLoader>
    );
};

export default ProfilePage;