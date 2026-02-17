import {useCallback} from "react";
import {Select} from "shared/ui/Select";
import {Country} from "entities/Country";

export interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

const options = [
    {value: Country.Germany, content: Country.Germany},
    {value: Country.Russia, content: Country.Russia},
    {value: Country.France, content: Country.France},
];

export const CountrySelect = (props: CountrySelectProps) => {
    const {className, value, onChange, readOnly} = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={className}
            label={`${"Выберите страну"}`}
            options={options}
            value={value}
            onChange={onChangeHandler}
            disabled={readOnly}
        />
    );
};