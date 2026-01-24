import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useTranslation} from "react-i18next";

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation("nav");
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>

			<div className={classNames(cls.links)}>
				<AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.mainLink)}
					to={RoutePath.main}>{t("Главная страница")}</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>{t("О сайте")}</AppLink>
			</div>
		</div>
	);
};
