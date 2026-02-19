import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {StateSchema} from "app/providers/StoreProvider";
import {getProfileForm} from "./getProfileForm";

describe("getProfileForm selector", () => {
    test("should return form", () => {

        const form = {
            firstName: "John",
            lastName: "Snow",
            age: 35,
            currency: Currency.EU,
            country: Country.Germany,
            city: "Winterfall",
            userName: "admin",
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: form,
            }
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});