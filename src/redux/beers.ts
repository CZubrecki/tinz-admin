import { CreateBeer, UpdateBeer } from "../models/beer.model";
import { CREATE_BEER, FETCH_BEER, FETCH_BEERS, UPDATE_BEER } from "./actions/beerActions";
import { api, GET, POST, PUT } from "./store";

export function beerReducer(state = {
    beers: [],
}, action: any) {
    switch (action.type) {
        case FETCH_BEERS: {
            return {
                ...state,
                beers: action.payload,
            };
        }
        case FETCH_BEER: {
            return state;
        }
        case CREATE_BEER: {
            return state;
        }
        case UPDATE_BEER: {
            return state;
        }
        default:
            return state;
    }
};

export async function fetchBeers(token: string) {
    const payload = await api(`/beer`, GET, token);
    return { type: FETCH_BEERS, payload };
}

export async function fetchBeer(token: string, id: string) {
    const payload = await api(`/beer/${id}`, GET, token);
    return { type: FETCH_BEER, payload };
}

export async function createBeer(token: string, beer: CreateBeer) {
    const payload = await api(`/beer`, POST, token, beer);
    return { type: CREATE_BEER, payload };
}

export async function updateBeer(token: string, updateRequest: UpdateBeer) {
    const payload = await api(`/beer`, PUT, token, updateRequest);
    return { type: UPDATE_BEER, payload };
}