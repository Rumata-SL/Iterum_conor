import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleImageBlockComponent.module.scss";
import {ArticleImageBlock} from "entities/Article/model/types/article";
import {Text} from "shared/ui/Text";
import {TextAlign} from "shared/ui/Text/ui/Text";

export interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const {className, block} = props;

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            {block.src && <img src={block.src} alt={block.title} className={cls.img}/>}
            {block.title && <Text text={block.title} align={TextAlign.CENTER}/>}
        </div>
    );
};