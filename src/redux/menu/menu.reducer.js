import MenuActionTypes from "./menu.types";

const INITIAL_STATE = {
	menuHidden: true
};

const menuReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MenuActionTypes.TOGGLE_MENU_HIDDEN:
			return {
				menuHidden: !state.menuHidden
			};
		case MenuActionTypes.TOGGLE_MENU_OFF:
			return {
				menuHidden: true
			};
		default:
			return state;
	}
};
export default menuReducer;
