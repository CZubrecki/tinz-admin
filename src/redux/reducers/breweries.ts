import { CreateBrewery, UpdateBrewery } from "../../models/brewery.model";
import { CREATE_BREWERY, FETCH_BREWERIES, FETCH_BREWERY, UPDATE_BREWERY } from "../actions/breweryActions";
import { api, GET, POST, PUT } from "../store";

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
        case FETCH_BREWERY: {
            return state;
        }
        case CREATE_BREWERY: {
            return state;
        }
        case UPDATE_BREWERY: {
            return state;
        }
        default:
            return state;
    }
};


export async function fetchBreweries(token: string) {
    const response = await api(`/brewery`, GET, token);
    return { type: FETCH_BREWERIES, payload: response };
}

export async function fetchBrewery(token: string, id: string) {
    const response = await api(`/brewery/${id}`, GET, token);
    return { type: FETCH_BREWERY, payload: response };
}

export async function createBrewery(token: string, brewery: CreateBrewery) {
    const response = await api(`/brewery`, POST, token, brewery);
    return { type: CREATE_BREWERY, payload: response };
}

export async function updateBrewery(token: string, updateRequest: UpdateBrewery) {
    const response = await api(`/brewery`, PUT, token, updateRequest);
    return { type: UPDATE_BREWERY, payload: response };
}