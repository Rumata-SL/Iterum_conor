import {Story} from "@storybook/react";
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {loginReducer} from "features/AuthByUsername/model/slice/loginSlice";
import {profileReducer} from "entities/Profile";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader";
import {articleDetailsReducer} from "entities/Article";
import {addCommentFormReducer} from "features/AddCommentForm/model/slice/addCommentFormSlice";

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComment: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
};


export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducer={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent/>
    </StoreProvider>
);