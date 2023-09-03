import { EDIT_FORM_ACTIONS } from '../../constants/editFormActions';

export const nameChanged = name => ({
	type: EDIT_FORM_ACTIONS.NAME,
	value: name
});
export const usernameChanged = (username, currentUsername) => ({
	type: EDIT_FORM_ACTIONS.USERNAME,
	value: username,
	currentUsername
});
export const rolChanged = role => ({
	type: EDIT_FORM_ACTIONS.ROLE,
	value: role
});
export const activeChanged = active => ({
	type: EDIT_FORM_ACTIONS.ACTIVE,
	value: active
});
export const usernameErrorChanged = error => ({
	type: EDIT_FORM_ACTIONS.USERNAME_ERROR,
	value: error
});
export const replace = newState => ({
	type: EDIT_FORM_ACTIONS.REPLACE,
	value: newState
});
