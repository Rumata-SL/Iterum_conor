import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AddCommentFormSchema} from "../types/addCommentForm";

const initialState: AddCommentFormSchema = {
    text: "",
    error: undefined,
};

const addCommentFormSlice = createSlice({
    name: "addCommentForm",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUserName.pending, (state) => {
    //             state.isLoading = true;
    //             state.error = undefined;
    //         })
    //         .addCase(loginByUserName.fulfilled, (state, action: PayloadAction<User>) => {
    //             state.username = action.payload.username;
    //             state.isLoading = false;
    //             // Add user to the state array
    //         })
    //         .addCase(loginByUserName.rejected, (state, action: PayloadAction<string | undefined>) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // }
});

export const {actions: addCommentFormActions} = addCommentFormSlice;
export const {reducer: addCommentFormReducer} = addCommentFormSlice;