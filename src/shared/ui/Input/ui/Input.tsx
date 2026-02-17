import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import {useTranslation} from "react-i18next";
import {ChangeEvent, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">

export interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readOnly?: boolean;
    number?: boolean;
}

export const Input = memo((props: InputProps) => {

    const {
        className,
        value = "",
        onChange,
        type = "text",
        placeholder,
        autoFocus,
        readOnly = false,
        number = false,
        ...otherProps
    } = props;
    const {t} = useTranslation();

    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const isCaretVisible = isFocused && !readOnly;


    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = number ? e.target.value.replace(/\D/g, "") : e.target.value;
        onChange?.(newValue);
        setCaretPosition(newValue.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    // const onSelect = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const onSelect = (e: SyntheticEvent<HTMLInputElement>) => {
        setCaretPosition(e.currentTarget.selectionStart ?? 0);
    };

    const mod: Mods = {
        [cls.readOnly]: readOnly,
    };

    return (
        <div className={classNames(cls.InputWrapper, mod, [className])}>
            {placeholder && <div className={cls.placeholder}>{`${placeholder} :`}</div>}
            <div className={cls.caretWrapper}>
                <input
                    ref={inputRef}
                    className={cls.input}
                    type={type}
                    value={value}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    autoFocus={isFocused}
                    readOnly={readOnly}
                    {...otherProps}
                />
                {isCaretVisible && <span style={{left: `${caretPosition * 9}px`}} className={cls.caret}/>}
            </div>
        </div>
    );
});

Input.displayName = "Input";