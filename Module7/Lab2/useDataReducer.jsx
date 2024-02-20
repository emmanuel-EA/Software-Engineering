import { useEffect, useReducer } from "react";

// hooks are usually named exports rather than default
export function useDataReducer(url) {
    // reducer state variable for holding fetched json data
    const [data, dispatch] = useReducer(reducer, { loading: true, data: {}, error: '' });

    useEffect(() => {
        if (url) {
            let ignore = false;
            dispatch({ type: 'FETCH_LOADING' }); // reset to loading before fetch

            fetch(url).then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        dispatch({ type: 'FETCH_SUCCESS', payload: json }); // send json response as payload
                    }
                })
                .catch(error => dispatch({ type: 'FETCH_ERROR', payload: error.message })) // send error msg as payload

            return () => {
                ignore = true;
                dispatch({ type: 'FETCH_CANCELLED' }); // cleanup function run, fetch cancelled
            };
        }
    }, [url]); // re-run effect if url changes

    // return the data object storing fetch results
    return data;
}

function reducer(postsResult, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { loading: false, data: action.payload, error: '' }
        case 'FETCH_ERROR':
            return { loading: false, data: {}, error: action.payload }
        case 'FETCH_CANCELLED':
            return { loading: false, data: {}, error: '' }
        case 'FETCH_LOADING':
            return { loading: true, data: {}, error: '' }
        default:
            return { ...postsResult, loading: false }
    }
}