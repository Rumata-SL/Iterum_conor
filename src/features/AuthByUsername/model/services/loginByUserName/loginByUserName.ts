import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, userActions} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";
import {ThunkConfig} from "app/providers/StoreProvider";

interface LoginByUserNameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
    "login/loginByUserName",
    async (authData, thunkAPI,) => {
        const {extra, dispatch, rejectWithValue} = thunkAPI;
        try {
            const response = await extra.api.post<User>("/login", authData);
            if (!response.data) {
                throw new Error("Login failed.");
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra?.navigate?.("/about");
            return response.data;
        } catch (e) {
            return rejectWithValue("Вы ввели неправильный логин или пароль");
        }

    },
);
