import { useEffect, useReducer } from 'react';
import { CREATE_FORM_ACTIONS } from '../../constants/createFormActions';
import { findUserByUserName } from '../api/userApi';
import { validateName, validateUsername } from '../users/userValidations';

const formValuesReducer = (state, action) => {
	switch (action.type) {
		case CREATE_FORM_ACTIONS.NAME: {
			const error = validateName(action.value);
			return {
				...state,
				name: { value: action.value, error }
			};
		}
		case CREATE_FORM_ACTIONS.USERNAME: {
			const error = validateUsername(action.value);

			return {
				...state,
				username: { value: action.value, loading: !error, error }
			};
		}
		case CREATE_FORM_ACTIONS.USERNAME_ERROR:
			return {
				...state,
				username: {
					value: state.username.value,
					error: action.value,
					loading: false
				}
			};
		default:
			throw new Error('Invalid action type');
	}
};

export const useCreateForm = () => {
	const [formValues, dispatchFormValues] = useReducer(formValuesReducer, {
		name: {
			value: '',
			error: undefined
		},
		username: {
			value: '',
			loading: false,
			error: undefined
		}
	});

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
