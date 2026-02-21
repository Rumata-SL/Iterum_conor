import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {Profile} from "entities/Profile";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";


export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "profile/fetchProfileData ",
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;
        try {
            const response = await extra.api.get<Profile>("/profile", {
                headers: {
                    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || "",
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