import { useEffect, useReducer } from 'react';
import { CREATE_FORM_ACTIONS } from '../../constants/createFormActions';
import { findUserByUserName } from '../api/userApi';
import {
	CREATE_FORM_INITIAL_STATE,
	createFormReducer
} from '../reducers/createFormReducer';

export const useCreateForm = () => {
	const [formValues, dispatchFormValues] = useReducer(
		createFormReducer,
		CREATE_FORM_INITIAL_STATE
	);

	useEffect(() => {
		if (!formValues.username.loading) return;

		const controller = new AbortController();
		const timeoutid = setTimeout(
			() =>
				validateUsernameIsAvailable(
					formValues.username.value,
					dispatchFormValues,
					controller.signal
				),
			500
		);
		return () => {
			controller.abort();
			clearTimeout(timeoutid);
		};
	}, [formValues.username.value, formValues.username.loading]);

	const isFormInvalid =
		!formValues.name.value ||
		formValues.name.error ||
		!formValues.username.value ||
		formValues.username.error ||
		formValues.username.loading;

	return {
		...formValues,
		dispatchFormValues,
		isFormInvalid
	};
};

const validateUsernameIsAvailable = async (
	username,
	dispatchFormValues,
	signal
) => {
	const { user, error, abort } = await findUserByUserName(username, signal);

	if (abort) return;
	if (error)
		return dispatchFormValues({
			type: CREATE_FORM_ACTIONS.USERNAME_ERROR,
			value: 'Error al validar'
		});

	dispatchFormValues({
		type: CREATE_FORM_ACTIONS.USERNAME_ERROR,
		value: user ? 'Ya está en uso' : undefined
	});
};
