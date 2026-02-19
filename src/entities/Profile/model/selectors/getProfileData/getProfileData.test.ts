import {StateSchema} from "app/providers/StoreProvider";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {getProfileData} from "./getProfileData";

describe("getProfileData selector", () => {
    test("should return data", () => {

        const data = {
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
                data: data,
            }
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});