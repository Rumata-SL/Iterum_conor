import {createAsyncThunk} from "@reduxjs/toolkit";
import {getProfileForm, Profile} from "entities/Profile";
import {ThunkConfig} from "app/providers/StoreProvider";
import {validateProfileData} from "../validateProfileData/validateProfileData";
import {ValidateProfileError} from "../../types/profile";


export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    "profile/updateProfileData ",
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;
        const form = getProfileForm(getState());
        const errors = validateProfileData(form);

        if (errors.length) {
            return rejectWithValue(errors);
        }
        try {

            const response = await extra.api.put<Profile>("/profile", form);
            return response.data;

        } catch (e) {
            console.log("error", e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }

    },
);