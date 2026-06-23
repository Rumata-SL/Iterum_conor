import {TestAsyncThunk} from "shared/lib/tests/testAsyncThunk/testAsyncThunk";
import {fetchProfileData, Profile} from "entities/Profile";
import {Currency} from "entities/Currency";
import {Country} from "entities/Country";

const data: Profile = {
    id: "1",
    firstName: "John",
    lastName: "Snow",
    age: 35,
    currency: Currency.EU,
    country: Country.Germany,
    city: "Winterfall",
    userName: "admin",
    avatar: "",
};
describe("fetchProfileData", () => {
    test("success ", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data: data}));
        const result = await thunk.callThunk("1");
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });
    test("error fetchProfileData", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk("1");

        expect(result.meta.requestStatus).toBe("rejected");

    });
});