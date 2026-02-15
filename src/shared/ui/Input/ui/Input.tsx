import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";
import {useTranslation} from "react-i18next";
import {ChangeEvent, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

export interface InputProps extends HTMLInputProps {
    className?: string;
    value: string | undefined;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {

    const {
        className,
        value = "",
        onChange,
        type = "text",
        placeholder,
        autoFocus,
        ...otherProps
    } = props;
    const {t} = useTranslation();

    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);


    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value.toLowerCase());
        setCaretPosition(e.target.value.length);
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


    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && <div className={cls.placeholder}>{`${placeholder} >`}</div>}
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
                    {...otherProps}
                />
                {isFocused && <span style={{left: `${caretPosition * 9}px`}} className={cls.caret}/>}
            </div>
        </div>
    );
});

Input.displayName = "Input";