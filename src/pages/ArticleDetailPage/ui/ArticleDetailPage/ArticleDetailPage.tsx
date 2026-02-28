import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailPage.module.scss";
import {useTranslation} from "react-i18next";
import {ArticleDetail} from "entities/Article";
import {useParams} from "react-router-dom";
import {Text} from "shared/ui/Text";
import {CommentList} from "entities/Comment";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader";
import {
    articleDetailsCommentSliceReducer,
    getArticleComments
} from "pages/ArticleDetailPage/model/slice/articleDetailsCommentSlice";
import {useAppSelector} from "shared/lib/hooks/useAppSelector";
import {getArticleDetailsCommentIsLoading} from "pages/ArticleDetailPage/model/selectors/comments";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {fetchCommentsByArticleId} from "pages/ArticleDetailPage/model/services/fetchCommentsByArticleId";

export interface ArticleDetailPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsComment: articleDetailsCommentSliceReducer,
};

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
    const {className} = props;
    const {t} = useTranslation("article-details");
    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useAppSelector(getArticleComments.selectAll);
    const isLoadingComments = useAppSelector(getArticleDetailsCommentIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                {t("Статья не найдена")}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <ArticleDetail id={id}/>
                <Text className={cls.commentTitle} title={t("Комментарии")}/>
                <CommentList
                    comments={comments}
                    isLoading={isLoadingComments}
                />
            </div>
        </DynamicModuleLoader>
    );
};
export default ArticleDetailPage;