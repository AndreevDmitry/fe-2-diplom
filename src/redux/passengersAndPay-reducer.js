import { SET_PASSENGER_AND_PAY } from "./action";

const initState = {
	ticketsAdult: 0,
	ticketsChild: 0,
	ticketsChildWithoutPlace: 0,
	payAdult: 0,
	payChild: 0,
	seatsNumbers: []
};

const passengersAndPayReducer = (state = initState, action) => {

	switch (action.type) {
		case SET_PASSENGER_AND_PAY:
			return {
				...state, [action.fieldName]: action.fieldValue
			};
		default:
			return state;
	};
};

export default passengersAndPayReducer;