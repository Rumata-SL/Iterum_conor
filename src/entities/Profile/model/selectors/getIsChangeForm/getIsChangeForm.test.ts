import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {StateSchema} from "app/providers/StoreProvider";
import {getIsChangeForm} from "./getIsChangeForm";

describe("getIsChangeForm selector", () => {
    const data = {
        firstName: "John",
        lastName: "Snow",
        age: 35,
        currency: Currency.EU,
        country: Country.Germany,
        city: "Winterfall",
        userName: "admin",
    };
    const form = {
        firstName: "Ivan",
        lastName: "Snow",
        age: 35,
        currency: Currency.EU,
        country: Country.Germany,
        city: "Winterfall",
        userName: "admin",
    };

    test("should return true", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: data,
                form: data
            }
        };
        expect(getIsChangeForm(state as StateSchema)).toEqual(true);
    });
    test("should work with false", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: data,
                form: form
            }
        };
        expect(getIsChangeForm(state as StateSchema)).toEqual(false);
    });
});