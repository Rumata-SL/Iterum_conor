import {FC, useEffect} from "react";
import {useStore} from "react-redux";
import {ReduxStoreWithManager, StateSchemaKey} from "app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducerListEntries = [StateSchemaKey, Reducer];

export interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {reducers, removeAfterUnmount, children} = props;
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducers]: ReducerListEntries) => {
            store.reducerManager.add(name, reducers);
            // Логирование при добавлении loginReducer
            store.dispatch({type: `@${name} init`});
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListEntries) => {
                    store.reducerManager.remove(name);
                    // Логирование при удалении loginReducer
                    store.dispatch({type: `@${name} remove`});
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};