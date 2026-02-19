import {validateProfileData} from "entities/Profile/model/services/validateProfileData/validateProfileData";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";

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

describe("validateProfileData", () => {
    test("should by array ", async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test("without firstName and  lastName", async () => {
        const result = validateProfileData({...data, firstName: "", lastName: ""});
        expect(result).toEqual(["INCORRECT_USER_DATA"]);
    });
    test("incorrect age", async () => {
        const result = validateProfileData({...data, age: undefined});
        expect(result).toEqual(["INCORRECT_AGE"]);
    });
    test("incorrect country", async () => {
        const result = validateProfileData({...data, country: undefined});
        expect(result).toEqual(["INCORRECT_COUNTRY"]);
    });
    test("should by array errors", async () => {
        const result = validateProfileData({});
        expect(result).toEqual(["INCORRECT_USER_DATA", "INCORRECT_AGE", "INCORRECT_COUNTRY"]);
    });

});