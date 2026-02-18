import {Action, CombinedState, configureStore, Reducer, ReducersMapObject, ThunkDispatch} from "@reduxjs/toolkit";
import {ReduxStoreWithManager, StateSchema, ThunkExtraArg} from "app/providers/StoreProvider/config/StateSchema";
import {counterReducer} from "entities/Counter/model/slice/counterSlice";
import {userReducer} from "entities/User";
import {createReducerManager} from "app/providers/StoreProvider/config/reducerManager";
import {$api} from "shared/api/api";
import {NavigateOptions} from "react-router";
import {To} from "history";


export function createReduxStore(
    initialState?: StateSchema,
    asyncReducer?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducer,
        counter: counterReducer,
        user: userReducer,
        // loginForm: loginReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extra: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extra,
            }
        }),
    }) as ReduxStoreWithManager;

    store.reducerManager = reducerManager;

    return store;
}

const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<StateSchema, ThunkExtraArg, Action>
