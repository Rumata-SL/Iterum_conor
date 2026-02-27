import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleTextBlockComponent.module.scss";
import {ArticleTextBlock} from "entities/Article/model/types/article";
import {Text} from "shared/ui/Text";

export interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const {className, block} = props;

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.title}/>}
            {block.paragraphs && block.paragraphs.map((paragraph) => {
                return <Text key={paragraph} className={cls.text} text={paragraph}/>;
            })}
        </div>
    );
}; 