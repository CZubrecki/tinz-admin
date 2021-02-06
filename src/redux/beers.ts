import { GET_BEERS } from "./actions/beerActions";
import { api, GET } from "./store";

export function beerReducer(state = {
    beers: [],
}, action: any) {
    switch (action.type) {
        case GET_BEERS: {
            console.log(action.payload);
            return {
                ...state,
                beers: action.payload,
            };
        }
        default:
            return state;
    }
};


export async function fetchBeers(token: string) {
    const response = await api(`/beer`, GET, token);
    return { type: GET_BEERS, payload: response };
}