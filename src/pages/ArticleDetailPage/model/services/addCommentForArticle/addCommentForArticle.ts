import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {CommentItem} from "entities/Comment";
import {getUserAuthData} from "entities/User";
import {getArticleDetailsData} from "entities/Article/model/selectors/articleDetails";
import {fetchCommentsByArticleId} from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<CommentItem, string, ThunkConfig<string>>(
    "articleDetailsComment/addCommentForArticle ",
    async (text, thunkAPI) => {
        const {extra, rejectWithValue, getState, dispatch} = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue("error");
        }

        try {
            const response = await extra.api.post<CommentItem>("/comments", {
                articleId: article?.id,
                userId: userData.id,
                text: text,

            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));
            return response.data;

        } catch (e) {
            console.log(e);
            return rejectWithValue("Произошла непредвиденная ошибка");
        }

    },
);