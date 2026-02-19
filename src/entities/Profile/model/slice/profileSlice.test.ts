import {profileActions, profileReducer, ProfileSchema, updateProfileData} from "entities/Profile";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {ValidateProfileError} from "entities/Profile/model/types/profile";

const data = {
    firstName: "John",
    lastName: "Snow",
    age: 36,
    currency: Currency.EU,
    country: Country.Germany,
    city: "Winterfall",
    userName: "admin",
    avatar: "",
};

describe("profileSlice  tests", () => {
    test("test setReadOnly", () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false};
        expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))).toEqual({readonly: true});
    });

    test("test cancelEdit", () => {
        const state: DeepPartial<ProfileSchema> = {data, form: {userName: ""}};
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual(
            {
                readonly: true,
                data,
                form: data,
                validateErrors: undefined
            }
        );
    });
    test("test updateProfileField", () => {
        const state: DeepPartial<ProfileSchema> = {data, form: {userName: "John"}};
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfileField({
            field: "userName",
            value: "Ivan"
        }))).toEqual(
            {
                data,
                form: {userName: "Ivan"},
            }
        );
    });
    test("test updateProfileData.pending", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA]
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual(
            {
                isLoading: true,
                validateErrors: undefined,
            }
        );
    });

    test("test updateProfileData.fulfilled", () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ""))).toEqual(
            {
                isLoading: false,
                validateErrors: undefined,
                readonly: true,
                data,
                form: data,
            }
        );
    });

});