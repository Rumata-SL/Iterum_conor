import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailPage.module.scss";
import {useTranslation} from "react-i18next";
import {ArticleDetail} from "entities/Article";
import {useParams} from "react-router-dom";

export interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const {className} = props;
    const {t} = useTranslation("article-details");
    const {id} = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                {t("Статья не найдена")}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            <ArticleDetail id={id}/>
        </div>
    );
};
export default ArticleDetailPage;