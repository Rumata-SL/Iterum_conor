import {StateSchema} from "app/providers/StoreProvider";
import {deepEqual} from "shared/utils/deepEqual/deepEqual";

export const getIsChangeForm = (state: StateSchema) => {
    const data = state.profile?.data;
    const form = state.profile?.form;
    return deepEqual(data, form);
};
