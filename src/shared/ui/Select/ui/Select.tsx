import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";
import {ChangeEvent, ReactNode, useMemo} from "react";

interface SelectOptions {
    value: string;
    content: string
}

export interface SelectProps {
    className?: string;
    children?: ReactNode;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}

export const Select = (props: SelectProps) => {
    const {className, label, options, value, onChange, disabled} = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionList = useMemo(() => {
        return options?.map((item: SelectOptions) => {
            return (
                <option
                    key={item.value}
                    value={item.value}
                    className={cls.option}
                >
                    {item.content}
                </option>
            );
        });
    }, [options]);

    const mods: Mods = {};

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select className={cls.select} value={value} onChange={onChangeHandler} disabled={disabled}>
                {optionList}
            </select>
        </div>
    );
};