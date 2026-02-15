import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginSchema} from "features/AuthByUsername/model/types/loginSchema";
import {loginByUserName} from "../services/loginByUserName/loginByUserName";
import {User} from "entities/User";


const initialState: LoginSchema = {
    username: "",
    password: "",
    isLoading: false,
    error: undefined,
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUserName.fulfilled, (state, action: PayloadAction<User>) => {
                state.username = action.payload.username;
                state.isLoading = false;
                // Add user to the state array
            })
            .addCase(loginByUserName.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const {actions: loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice;