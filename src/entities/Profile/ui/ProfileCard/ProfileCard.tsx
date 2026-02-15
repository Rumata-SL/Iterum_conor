import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import {useAppSelector} from "shared/lib/hooks/useAppSelector";
import {getProfileData, getProfileError, getProfileIsLoading} from "entities/Profile";
import {Loader} from "shared/ui/Loader";
import {Text} from "shared/ui/Text";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input";

export interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
    const {t} = useTranslation("profile");
    const profile = useAppSelector(getProfileData);
    const isLoading = useAppSelector(getProfileIsLoading);
    const error = useAppSelector(getProfileError);
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            {isLoading ? <Loader/> : (<div>
                <div className={cls.header}><Text title={t("Профиль")}/>
                    <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t("Редактировать")}</Button></div>
                <div className={cls.data}>
                    <Input className={cls.input} value={profile?.firstName} placeholder={t("Ваше имя")}/>
                    <Input className={cls.input} value={profile?.lastName} placeholder={t("Ваша фаимлия")}/>
                </div>
            </div>)}
        </div>
    );
};