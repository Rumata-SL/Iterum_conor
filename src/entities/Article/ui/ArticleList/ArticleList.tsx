import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleList.module.scss";
import {Article} from "entities/Article";
import {ArticleView} from "entities/Article/model/types/article";
import {ArticleListItem} from "entities/Article/ui/ArticleListItem/ArticleListItem";

export interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = (props: ArticleListProps) => {
    const {className, articles, isLoading, view = ArticleView.SMALL} = props;

    const renderArticle = (article: Article) => {
        return <ArticleListItem key={article.id} article={article} view={view}/>;
    };

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles && articles?.length > 0
                ? articles.map(renderArticle)
                : null
            }
        </div>
    );
};