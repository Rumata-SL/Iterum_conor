import {TestAsyncThunk} from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";
import {updateProfileData} from "entities/Profile";
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

describe("updateProfileData", () => {

    test("success update", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({data}));
        const result = await thunk.callThunk();
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error update", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);

    })

    ;test("validateError", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {...data, firstName: "", lastName: ""}
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);

    });
});