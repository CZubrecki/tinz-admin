import { createStore } from "redux";
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./auth";
import { beerReducer } from "./beers";

const persistConfig = {
    key: 'root',
    whitelist: ['auth'],
    storage,
};

const reducers = {
    auth: authReducer,
    beer: beerReducer,
};

const reducer = persistCombineReducers(persistConfig, reducers);
const store = createStore(reducer);
export default store;
export type StoreState = ReturnType<typeof store['getState']>;

const API_URL = 'http://localhost:8080';

export const POST = 'POST';
export const GET = 'GET';
export const DELETE = 'DELETE';
export const PUT = 'PUT';

export type apiThunk = typeof api;

export const api = async (
    endpoint: string,
    method: 'POST' | 'GET' | 'DELETE' | 'PUT' | 'PATCH' = 'GET',
    token?: string,
    body?: any,
    contentType?: any,
    options: { extraHeaders?: { [key: string]: string }; params?: object } = {},
) => {
    const requestBody = body ? contentType ? body : JSON.stringify(body) : undefined;
    const response = await fetch(API_URL + endpoint, {
        method,
        headers: {
            'Content-Type': contentType ? contentType : 'application/json',
            ...(!!token ? { 'Authorization': 'Bearer ' + token } : undefined),
            ...options.extraHeaders,
        },
        body: requestBody,
    });

    const data = await response
        .json()
        .catch((err) => console.log(`Not able to read response body, it's possible there wasn't one. ${JSON.stringify(err)}`));

    return data;
}