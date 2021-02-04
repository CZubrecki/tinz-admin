import { api, POST } from "../constants/API";
import { Credentials } from "../models/auth.model";

export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const SIGN_OUT = "SIGN_OUT";

const initialState = {
    email: null,
    token: null,
    refreshToken: null,
    exp: null,
};

function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case SIGN_IN: {
            const updatedState = {
                ...state,
                ...action.payload,
            };
            return updatedState;
        }
        default:
            return state;
    }
};

export default authReducer;

export async function signIn(credentials: Credentials) {
    const response = await api(`/auth/login`, POST, credentials);
    const payload = {
        email: credentials.email,
        token: response.jwtToken,
        exp: response.payload.exp,
        refreshToken: null,
    }
    return { type: SIGN_IN, payload };
};

export function signUp(payload: any) {
    return { type: SIGN_UP, payload }
};

export function signOut(payload: any) {
    return { type: SIGN_OUT, payload }
};

