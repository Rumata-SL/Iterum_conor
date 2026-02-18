import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ProfilePageHeader.module.scss";
import {Text} from "shared/ui/Text";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {useAppSelector} from "shared/lib/hooks/useAppSelector";
import {getIsChangeForm, getProfileReadOnly, profileActions, updateProfileData} from "entities/Profile";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useCallback} from "react";

export interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {
    const {t} = useTranslation("profile");
    const dispatch = useAppDispatch();
    const readOnly = useAppSelector(getProfileReadOnly);
    const isChange = useAppSelector(getIsChangeForm);

    const readOnlyHandler = () => {
        if (readOnly) {
            dispatch(profileActions.setReadOnly(false));
        } else {
            dispatch(profileActions.cancelEdit());
        }
    };
    const onSave = useCallback(() => {
        console.log("onSave");
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t("Профиль")}/>
            <Button
                className={cls.editBtn} theme={readOnly ? ButtonTheme.OUTLINE : ButtonTheme.OUTLINE_RED}
                onClick={readOnlyHandler}
            >
                {readOnly ? t("Редактировать") : t("Отменить")}
            </Button>
            {!readOnly && <Button
                className={cls.saveBtn} theme={ButtonTheme.OUTLINE}
                onClick={onSave}
                disabled={isChange}
            >
                {t("Сохранить")}
            </Button>}
        </div>
    );
};