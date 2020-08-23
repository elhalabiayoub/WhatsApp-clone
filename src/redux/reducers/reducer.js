import { SIGNIN } from "../types/rootTypes";

const reducer = (state = [], action) => {
	if (action.type === SIGNIN) {
		state = { ...state, user: action.data };

		return state;
	} else {
		return state;
	}
};

export default reducer;
