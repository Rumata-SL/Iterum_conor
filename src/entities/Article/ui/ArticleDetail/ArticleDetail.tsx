import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleDetail.module.scss";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useCallback} from "react";
import {fetchArticleById} from "../../model/services/fetchArticleById/fetchArticleById";
import {articleDetailsReducer} from "../../model/slice/articleDetailsSlice";
import {useAppSelector} from "shared/lib/hooks/useAppSelector";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../model/selectors/articleDetails";
import {Text} from "shared/ui/Text";
import {TextAlign, TextSize} from "shared/ui/Text/ui/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";
import {Avatar} from "shared/ui/Avatar";
import EyeIcon from "../../../../shared/assets/icons/Eye.svg";
import CalendarIcon from "../../../../shared/assets/icons/Calendar.svg";
import {Icon} from "shared/ui/Icon/Icon";
import {ArticleBlock, ArticleBlockType} from "../../model/types/article";
import {ArticleTextBlockComponent} from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import {ArticleCodeBlockComponent} from "entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import {ArticleImageBlockComponent} from "entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect";


export interface ArticleDetailProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetail = (props: ArticleDetailProps) => {
    const {className, id} = props;
    const dispatch = useAppDispatch();
    const article = useAppSelector(getArticleDetailsData);
    const isLoading = useAppSelector(getArticleDetailsIsLoading);
    const error = useAppSelector(getArticleDetailsError);


    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>;
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}/>;
        default:
            return null;
        }
    }, []);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={"50%"}/>
                <Skeleton className={cls.title} width={300} height={32}/>
                <Skeleton className={cls.skeleton} width={600} height={24}/>
                <Skeleton className={cls.skeleton} width={"100%"} height={200}/>
                <Skeleton className={cls.skeleton} width={"100%"} height={200}/>
            </>
        );
    } else if (error) {
        content = <Text align={TextAlign.CENTER} text={error}/>;
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar}/>
                </div>
                <Text className={cls.title} title={article?.title} text={article?.subtitle}/>
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon}/>
                    <Text size={TextSize.M} text={String(article?.views)}/>
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon}/>
                    <Text size={TextSize.M} text={article?.createdAt}/>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetail, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};