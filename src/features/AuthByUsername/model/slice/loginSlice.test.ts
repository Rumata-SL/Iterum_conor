import {LoginSchema} from "../types/loginSchema";
import {loginActions, loginReducer} from "./loginSlice";

describe("login slice tests", () => {
    test("test setUsername", () => {
        const state: DeepPartial<LoginSchema> = {username: "123"};
        expect(loginReducer(state as LoginSchema, loginActions.setUsername("admin"))).toEqual({username: "admin"});
    });
    test("test setPassword", () => {
        const state: DeepPartial<LoginSchema> = {password: "123"};
        expect(loginReducer(state as LoginSchema, loginActions.setPassword("123123"))).toEqual({password: "123123"});
    });
});