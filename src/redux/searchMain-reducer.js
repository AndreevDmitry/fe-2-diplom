import { SET_FORM, SET_LAST_ROUTES, setLastRoutes } from './action';
import { api } from '../api/api';


const initState = {
	form: {
		whereFromCity: '',
		whereFromDate: '',
		whereToCity: '',
		whereToDate: '',
		cityWhereFromId: '',
		cityWhereToId: ''
	},
	lastRoutes: []
};

const searchMainReducer = (state = initState, action) => {

	switch (action.type) {
		case SET_FORM:
			return {
				...state,
				form: action.form
			};

		case SET_LAST_ROUTES:
			return {
				...state,
				lastRoutes: action.lastRoutes
			}

		default:
			return state;
	};
};

export const searchMainAPI = (value) => {
	return api.searchRoutes(value)
	.then(res => res);
}

export const getLastRoutesTC = () => (dispatch) => {
	api.getLastRoutes()
		.then(res => dispatch(setLastRoutes(res.data)));
};

export default searchMainReducer;