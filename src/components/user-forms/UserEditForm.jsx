import style from './UserEditForm.module.css';
import InputText from '../forms/InputText';
import InputTextAsync from '../forms/InputTextAsync';
import Select from '../forms/Select';
import { USER_ROLES } from '../../constants/userRoles';
import InputCheckbox from '../forms/InputCheckbox';
import Button from '../buttons/Button';
import { useEditForm } from '../../lib/hooks/useEditForm';
import { useContext, useState } from 'react';
import { updateUser } from '../../lib/api/userApi';
import { UserFormsContext } from '../../lib/contexts/UserFormsContext';

const UserEditForm = () => {
	const { currentUser, onSuccess } = useContext(UserFormsContext);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { username, name, role, active, dispatchFormValues, isFormInvalid } =
		useEditForm(currentUser);
	return (
		<form
			onSubmit={ev =>
				handleSubmit(
					ev,
					{
						id: currentUser.id,
						name: name.value,
						username: username.value,
						role,
						active
					},
					setIsSubmitting,
					onSuccess
				)
			}
		>
			<div className={style.row}>
				<InputText
					className={style.input}
					label='Nombre'
					placeholder='John Doe'
					error={name.error}
					value={name.value}
					onChange={ev =>
						dispatchFormValues({ type: 'name_changed', value: ev.target.value })
					}
				></InputText>
				<InputTextAsync
					className={style.input}
					label='Username'
					placeholder='johndoe'
					success={
						username.value !== currentUser.username &&
						!username.loading &&
						!username.error
					}
					loading={username.loading}
					error={username.error}
					value={username.value}
					onChange={ev =>
						dispatchFormValues({
							type: 'username_changed',
							value: ev.target.value,
							currentUsername: currentUser.username
						})
					}
				></InputTextAsync>
			</div>
			<div className={style.row}>
				<Select
					value={role}
					onChange={ev =>
						dispatchFormValues({ type: 'role_changed', value: ev.target.value })
					}
				>
					<option value={USER_ROLES.TEACHER}>Profesor</option>
					<option value={USER_ROLES.STUDENT}>Alumno</option>
					<option value={USER_ROLES.OTHER}>Otro</option>
				</Select>
				<div className={style.active}>
					<InputCheckbox
						checked={active}
						onChange={ev =>
							dispatchFormValues({
								type: 'active_changed',
								value: ev.target.checked
							})
						}
					/>
					<span>¿Activo?</span>
				</div>
				<Button type='submit' disabled={isFormInvalid || isSubmitting}>
					{isSubmitting ? 'Cargando..' : 'Editar usuario'}
				</Button>
			</div>
		</form>
	);
};

const handleSubmit = async (ev, user, setIsSubmitting, onSuccess) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const success = await updateUser(user);

	if (success) {
		onSuccess();
	} else {
		setIsSubmitting(false);
	}
};

export default UserEditForm;
