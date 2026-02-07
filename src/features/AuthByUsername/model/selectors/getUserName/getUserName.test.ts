import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider";
import {getUserName} from "./getUserName";

describe("getUserName selector", () => {
    test("should return the username", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: "username",
            }
        };
        expect(getUserName(state as StateSchema)).toEqual("username");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUserName(state as StateSchema)).toEqual("");
    });

});