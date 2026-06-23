import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import {Profile, ProfileKey} from "entities/Profile";
import {Text} from "shared/ui/Text";
import {useTranslation} from "react-i18next";
import {Input} from "shared/ui/Input";
import {Loader} from "shared/ui/Loader";
import {TextAlign, TextTheme} from "shared/ui/Text/ui/Text";
import {Avatar} from "shared/ui/Avatar";
import {CurrencySelect} from "entities/Currency";
import {CountrySelect} from "entities/Country";

export interface ProfileCardProps {
    className?: string;
    form?: Profile;
    isLoading?: boolean;
    error?: string;
    readOnly?: boolean;
    handleTextChange?: (
        field: ProfileKey,
        value: string
    ) => void;
    handleNumberChange?: (
        field: ProfileKey,
        value: string
    ) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {className, form, isLoading, error, readOnly, handleTextChange, handleNumberChange} = props;
    const {t} = useTranslation("profile");

    if (isLoading) {
        return <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
            <Loader/>
        </div>;
    }

    if (error) {
        return <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
            <Text
                theme={TextTheme.ERROR}
                title={t("Произошла ошибка при загрузке профиля")}
                text={t("Попробуйте обновить страницу")}
                align={TextAlign.CENTER}
            />
        </div>;
    }

    const mods: Mods = {
        [cls.editing]: !readOnly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {
                    form?.avatar && (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={form?.avatar} size={80}/>
                        </div>
                    )
                }
                <Input
                    className={cls.input}
                    value={form?.firstName}
                    onChange={(e) => handleTextChange?.("firstName", e)}
                    placeholder={t("Ваше имя")}
                    readOnly={readOnly}
                />
                <Input
                    className={cls.input}
                    value={form?.lastName}
                    onChange={(e) => handleTextChange?.("lastName", e)}
                    placeholder={t("Ваше имя")}
                    readOnly={readOnly}
                />
                <Input
                    className={cls.input}
                    value={form?.age}
                    onChange={(e) => handleNumberChange?.("age", e)}
                    placeholder={t("Ваша фамилия")}
                    readOnly={readOnly}
                    number
                />
                <Input
                    className={cls.input}
                    value={form?.city}
                    onChange={(e) => handleTextChange?.("city", e)}
                    placeholder={t("Город")}
                    readOnly={readOnly}
                />
                <Input
                    className={cls.input}
                    value={form?.userName}
                    onChange={(e) => handleTextChange?.("userName", e)}
                    placeholder={t("Имя пользователя")}
                    readOnly={readOnly}
                />
                <Input
                    className={cls.input}
                    value={form?.avatar}
                    onChange={(e) => handleTextChange?.("avatar", e)}
                    placeholder={t("Аватар")}
                    readOnly={readOnly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={form?.currency}
                    onChange={(e) => handleTextChange?.("currency", e)}
                    readOnly={readOnly}
                />
                <CountrySelect
                    className={cls.input}
                    value={form?.country}
                    onChange={(e) => handleTextChange?.("country", e)}
                    readOnly={readOnly}
                />
            </div>
        </div>
    );
};