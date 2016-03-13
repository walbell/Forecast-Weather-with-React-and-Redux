import {FETCH_WEATHER} from '../actions/index.js';

export default function (state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			// we do not want to manipulate the state, we need to return a new object
			return [ action.payload.data, ...state];
			// equals to
			// return state.concat([action.payload.data]);
			// we insert the action.payload.data at the top of the array
	}
	return state;
}