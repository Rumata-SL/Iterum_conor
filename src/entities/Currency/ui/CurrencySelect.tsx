import {Select} from "shared/ui/Select";
import {Currency} from "../model/types/currency";
import {memo, useCallback} from "react";

export interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}

const options = [
    {value: Currency.RUB, content: Currency.RUB,},
    {value: Currency.EU, content: Currency.EU,},
    {value: Currency.USD, content: Currency.USD,},
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {className, value, onChange, readOnly} = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={className}
            label={`${"Выберите валюту"}`}
            options={options}
            value={value}
            onChange={onChangeHandler}
            disabled={readOnly}
        />
    );
});

CurrencySelect.displayName = "CurrencySelect";