import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile, ProfileKey, ProfileSchema, ValidateProfileError} from "../types/profile";
import {updateProfileData} from "../services/updateProfileData/updateProfileData";
import {fetchProfileData} from "../services/fetchProfileData/fetchProfileData";

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
    validateErrors: undefined,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateErrors = undefined;
            state.form = state.data;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.data,
                ...action.payload,
            };
        },
        updateProfileField: <K extends ProfileKey>(
            state: ProfileSchema,
            action: PayloadAction<{ field: K; value: Profile[K] }>
        ) => {
            if (!state.form) {
                state.form = {} as Profile;
            }
            const {field, value} = action.payload;
            state.form[field] = value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.data = action.payload;
                state.form = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProfileData.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
        builder
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.validateErrors = undefined;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validateErrors = undefined;
            })
            .addCase(updateProfileData.rejected, (state, action: PayloadAction<ValidateProfileError[] | undefined>) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
            });
    }
});

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;