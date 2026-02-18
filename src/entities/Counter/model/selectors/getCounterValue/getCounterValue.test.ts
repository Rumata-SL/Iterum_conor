import {StateSchema} from "app/providers/StoreProvider";
import {getCounterValue} from "entities/Counter";

describe("getCounterValue.test", () => {
    test("should return the correct value", () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            }
        };

        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});