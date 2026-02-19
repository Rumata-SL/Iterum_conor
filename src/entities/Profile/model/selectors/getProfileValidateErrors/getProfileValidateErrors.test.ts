import {StateSchema} from "app/providers/StoreProvider";
import {getProfileValidateErrors} from "./getProfileValidateErrors";
import {ValidateProfileError} from "entities/Profile/model/types/profile";

describe("getProfileValidateErrors selector", () => {
    test("should return undefined", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: undefined
            }
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
    test("should return SERVER_ERROR,", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.SERVER_ERROR],
            }
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(["SERVER_ERROR"]);
    });
    test("should return INCORRECT_USER_DATA, INCORRECT_AGE", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE],
            }
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(["INCORRECT_USER_DATA", "INCORRECT_AGE"]);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});