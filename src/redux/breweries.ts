import { FETCH_BREWERIES } from "./actions/breweryActions";
import { api, GET } from "./store";

export function breweryReducer(state = {
    breweries: [],
}, action: any) {
    switch (action.type) {
        case FETCH_BREWERIES: {
            return {
                ...state,
                breweries: action.payload,
            };
        }
        default:
            return state;
    }
};


export async function fetchBreweries(token: string) {
    const response = await api(`/brewery`, GET, token);
    return { type: FETCH_BREWERIES, payload: response };
}