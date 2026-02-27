import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ArticleCodeBlockComponent.module.scss";
import {ArticleCodeBlock} from "entities/Article/model/types/article";
import {Code} from "shared/ui/Code/Code";

export interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const {className, block} = props;

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code codeText={block.code}/>
        </div>
    );
};