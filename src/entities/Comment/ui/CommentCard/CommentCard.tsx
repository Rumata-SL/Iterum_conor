import {classNames} from "shared/lib/classNames/classNames";
import cls from "./CommentCard.module.scss";
import {CommentItem} from "../../model/types/comment";
import {Avatar} from "shared/ui/Avatar";
import {Text} from "shared/ui/Text";
import {TextSize} from "shared/ui/Text/ui/Text";
import {Skeleton} from "shared/ui/Skeleton/Skeleton";

export interface CommentCardProps {
    className?: string;
    comment?: CommentItem;
    isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
    const {className, comment, isLoading} = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border={"50%"}/>
                    <Skeleton width={200} height={20}/>
                </div>
                <Skeleton width={"100%"} height={50} className={cls.text}/>
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment?.user.avatar && <Avatar size={40} src={comment?.user.avatar} className={cls.avatar}/>}
                <Text title={comment?.user.username} size={TextSize.M}/>
            </div>
            <Text title={comment?.text} size={TextSize.S} className={cls.text}/>

        </div>
    );
};