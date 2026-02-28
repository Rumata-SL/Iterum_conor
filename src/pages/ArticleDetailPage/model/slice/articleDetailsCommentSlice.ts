import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCommentsByArticleId} from "pages/ArticleDetailPage/model/services/fetchCommentsByArticleId";
import {CommentItem} from "entities/Comment";
import {StateSchema} from "app/providers/StoreProvider";
import {ArticleDetailsCommentSchema} from "pages/ArticleDetailPage";

// const initialState: ArticleDetailsCommentSchema = {
//     isLoading: false,
//     error: "",
//     data: undefined,
// };

const commentsAdapter = createEntityAdapter<CommentItem>({
    selectId: (comment: CommentItem) => comment.id,
});


const articleDetailsCommentSlice = createSlice({
    name: "articleDetailsComment",
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        ids: [],
        entities: {},
        isLoading: false,
        error: undefined
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<CommentItem[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComment || commentsAdapter.getInitialState()
);

export const {actions: articleDetailsCommentSliceActions} = articleDetailsCommentSlice;
export const {reducer: articleDetailsCommentSliceReducer} = articleDetailsCommentSlice;