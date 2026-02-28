import {classNames} from "shared/lib/classNames/classNames";
import cls from "./CommentList.module.scss";
import {CommentItem} from "../../model/types/comment";
import {Text} from "shared/ui/Text";
import {useTranslation} from "react-i18next";
import {CommentCard} from "../../ui/CommentCard/CommentCard";

export interface CommentListProps {
    className?: string;
    comments?: CommentItem[];
    isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const {className, comments, isLoading} = props;
    const {t} = useTranslation();

    if (isLoading) {
        return <div className={classNames(cls.CommentList, {}, [className])}>
            <CommentCard isLoading={isLoading}/>
            <CommentCard isLoading={isLoading}/>
            <CommentCard isLoading={isLoading}/>
        </div>;
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length ?
                comments.map((comment: CommentItem) => (
                    <CommentCard key={comment.id} className={cls.commentCard} comment={comment}
                        isLoading={isLoading}/>))
                : <Text text={t("Комментарии отсутствуют")}/>}
        </div>
    );
};