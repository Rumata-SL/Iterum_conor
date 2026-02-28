import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AddCommentForm.module.scss";
import {Input} from "shared/ui/Input";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {DynamicModuleLoader, ReducerList} from "shared/lib/components/DynamicModuleLoader";
import {addCommentFormActions, addCommentFormReducer} from "../../model/slice/addCommentFormSlice";
import {useAppSelector} from "shared/lib/hooks/useAppSelector";
import {getAddCommentFormError, getAddCommentFormText} from "../../model/selectors/addCommentFormSelectors";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch";
import {useCallback} from "react";

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};
const AddCommentForm = (props: AddCommentFormProps) => {
    const {className, onSendComment} = props;
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const text = useAppSelector(getAddCommentFormText);
    const errors = useAppSelector(getAddCommentFormError);

    const onCommentChangeHandler = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentChangeHandler("");
    }, [onCommentChangeHandler, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t("Введите текст комментария")}
                    value={text}
                    onChange={onCommentChangeHandler}
                />
                <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>{t("Отправить")}</Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;