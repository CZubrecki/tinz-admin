import { Credentials } from "../../models/auth.model";
import { SIGN_IN, SIGN_OUT } from "../actions/authActions";
import { api, POST } from "../store";

export function authReducer(state = {
    email: null,
    token: null,
    refreshToken: null,
    exp: null,
}, action: any) {
    switch (action.type) {
        case SIGN_IN: {
            const updatedState = {
                ...state,
                ...action.payload,
            };
            return updatedState;
        }
        case SIGN_OUT: {
            return {
                email: null,
                token: null,
                refreshToken: null,
                exp: null,
            }
        }
        default:
            return state;
    }
};

export async function signIn(credentials: Credentials) {
    const response = await api(`/auth/login`, POST, undefined, credentials);
    const payload = {
        email: credentials.email,
        token: response.jwtToken,
        exp: response.payload.exp,
        refreshToken: null,
    }
    return { type: SIGN_IN, payload };
};

export function signOut(payload: any) {
    return { type: SIGN_OUT, payload };
};

