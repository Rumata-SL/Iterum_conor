import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {CommentItem} from "entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<CommentItem[], string | undefined, ThunkConfig<string>>(
    "articleDetailsComment/fetchCommentsByArticleId ",
    async (articleId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        if (!articleId) {
            return rejectWithValue("error");
        }
        try {
            const response = await extra.api.get<CommentItem[]>("/comments", {
                params: {
                    articleId,
                    _expand: "user"
                }
            });

            if (!response.data) {
                throw new Error();
            }
            return response.data;


        } catch (e) {
            console.log(e);
            return rejectWithValue("Произошла непредвиденная ошибка");
        }

    },
);