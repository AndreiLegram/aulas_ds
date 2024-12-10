import { useEffect, useReducer } from 'react';
import axios from "axios";
const initialState = {
    loading: true,
    data: [],
    error: null
}
const reduce = (state, action) => {
    switch (action.type) {
        case 'OnFetching':
            return {
                loading: true,
                data: [],
                error: null
            }
        case 'OnSuccess':
            return {
                loading: false,
                data: action.payload,
                error: null
            }
        case 'OnFailure':
            return {
                loading: false,
                data: [],
                error: 'Lamento, ocorreu um erro!'
            }
        default:
            return state;
    }
}
export function useFindBooksReducer(search) {
    const [state, dispatch] = useReducer(reduce, initialState)
    useEffect(() => {
        async function listBooks() {
            try {
                const apiUrl = 'http://localhost:3000/api/books';
                const result = await axios.get(apiUrl);
                if (result.data) {
                    dispatch({ type: 'OnSuccess', payload: result.data });
                } else {
                    dispatch({ type: 'OnFailure' });
                }
            }
            catch (err) {
                dispatch({ type: 'OnFailure' });
            }
        };
        dispatch({ type: 'OnFetching' });
        listBooks();
    }, [search]);
    return { state };
} 
