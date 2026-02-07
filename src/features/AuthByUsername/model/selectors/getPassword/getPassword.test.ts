import {getPassword} from "./getPassword";
import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";

describe("getPassword", () => {
    test("should return the state if the user doesn't exist", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: "123",
            }
        };
        expect(getPassword(state as StateSchema)).toEqual("123");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getPassword(state as StateSchema)).toEqual("");
    });
});