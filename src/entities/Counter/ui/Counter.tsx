import {Button} from "shared/ui/Button/Button";
import {counterActions, getCounterValue} from "entities/Counter";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useAppSelector} from "shared/lib/hooks/useAppSelector";

export const Counter = () => {
    const {t} = useTranslation();

    const dispatch = useAppDispatch();
    const counterValue = useAppSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };


    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}</h1>
            <Button data-testid="increment-btn" onClick={increment}>{t("increment")}</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>{t("decrement")}</Button>
        </div>
    );
};