import {
	GET_USERS_FAIL,
	GET_USERS_SUCCESS,
	GET_USER_BY_ID_SUCCESS,
	GET_USER_BY_ID_FAIL,
	START_FETCH,
} from '../actions/actions'

const initialState = {
	userById: {},
	users: [{}],
	loading: false,
	error: null
}

export default function userReducer(state=initialState, action) {
	switch(action.type){
		case START_FETCH:
			return {
				...state,
				loading: true,
			};
		case GET_USERS_SUCCESS:
			return {
				...state,
				users: [...action.payload],
				loading: false,
				error: null
			};
		case GET_USERS_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		case GET_USER_BY_ID_SUCCESS:
			return {
				...state,
				userById: action.payload,
				loading: false,
				error: null
			};
		case GET_USER_BY_ID_FAIL:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			return state;
	}
}
