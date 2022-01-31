import { filterTicketsAndSeatsAC, SET_TICKETS_AND_SEATS } from "./action";
import { api } from "../api/api";

const initState = {
	ticketsArray: [],
	choiceSeatsArray: [],
	totalCountTickets: 0,
	sort: 'date',
	limit: '5',
	offset: 0,
	have_second_class: false,
	have_third_class: false,
	have_fourth_class: false,
	have_first_class: false,
	have_wifi: false,
	have_express: false,
	price_arr: [0, 5000],
	start_departure_hour_arr: [0, 24],
	start_arrival_hour_arr: [0, 24],
	end_departure_hour_arr: [0, 24],
	end_arrival_hour_arr: [0, 24],
	customRangeCostFrom: false,
	customRangeCostTo: false,
	trainId: '',
	actualPage: '',
	preloader: true
};

const filterTicketsAndSeatsReducer = (state = initState, action) => {

	switch (action.type) {
		case SET_TICKETS_AND_SEATS:
			return {
				...state, [action.fieldName]: action.fieldValue
			};
		default:
			return state;
	};
};

export const filterTicketsAndSeatsReducerTC = (fieldName, fieldValue) => (dispatch, getState) => {
	dispatch(filterTicketsAndSeatsAC(fieldName, fieldValue));
	if (getState().filterChoiceTicketsAndSeatsPages.actualPage === '/search_tickets') {
			api.filterTicketsAndSeatsAPI(
				getState().sectionSearch.form,
				getState().filterChoiceTicketsAndSeatsPages
			)
				.then(res => {
					dispatch(filterTicketsAndSeatsAC('ticketsArray', res.data.items));
					dispatch(filterTicketsAndSeatsAC('totalCountTickets', res.data.total_count));
					dispatch(filterTicketsAndSeatsAC('preloader', false));
				});
		} else if (getState().filterChoiceTicketsAndSeatsPages.actualPage === '/seat_selection') {
			api.setSeatSelection(getState().filterChoiceTicketsAndSeatsPages)
			.then(res => {
				dispatch(filterTicketsAndSeatsAC('choiceSeatsArray', res.data));
			})
		}
}

export default filterTicketsAndSeatsReducer;