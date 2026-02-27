import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Code.module.scss";
import CopyIcon from "../../assets/icons/Copy.svg";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

export interface CodeProps {
    className?: string;
    codeText: string;
}

export const Code = (props: CodeProps) => {
    const {className, codeText} = props;

    const onCopy = async () => {
        await navigator.clipboard.writeText(codeText);
    };

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copy} onClick={onCopy} theme={ButtonTheme.CLEAR_INVERTED}>
                <CopyIcon className={cls.icon}/>
            </Button>
            <code>
                {codeText}
            </code>
        </pre>
    );
};