import {Action, configureStore, ReducersMapObject, ThunkDispatch} from "@reduxjs/toolkit";
import {ReduxStoreWithManager, StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {counterReducer} from "entities/Counter/model/slice/counterSlice";
import {userReducer} from "entities/User";
import {createReducerManager} from "app/providers/StoreProvider/config/reducerManager";


export function createReduxStore(initialState?: StateSchema, asyncReducer?: ReducersMapObject<StateSchema>) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducer,
        counter: counterReducer,
        user: userReducer,
        // loginForm: loginReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    }) as ReduxStoreWithManager;

    store.reducerManager = reducerManager;

    return store;
}

const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, undefined, Action>


// export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];


