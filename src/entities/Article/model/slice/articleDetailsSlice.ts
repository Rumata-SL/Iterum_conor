import {ArticleDetailsSchema} from "../types/articleDetailsSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchArticleById} from "entities/Article/model/services/fetchArticleById/fetchArticleById";
import {Article} from "../types/article";

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: "",
    data: undefined,
};

const articleDetailsSlice = createSlice({
    name: "articleDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchArticleById.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const {actions: articleDetailsActions} = articleDetailsSlice;
export const {reducer: articleDetailsReducer} = articleDetailsSlice;