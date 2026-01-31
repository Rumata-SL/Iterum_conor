import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {useTranslation} from "react-i18next";

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation("nav");
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

        </div>
    );
};
