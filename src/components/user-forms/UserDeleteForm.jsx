import style from './UserDeleteForm.module.css';
import Button from '../buttons/Button';
import { useContext, useState } from 'react';
import { deleteUserById } from '../../lib/api/userApi';
import { UserFormsContext } from '../../lib/contexts/UserFormsContext';

const UserDeleteForm = () => {
	const { currentUser, onSuccess } = useContext(UserFormsContext);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { setFiltersForm } = useContext(UserFormsContext);
	return (
		<form
			onSubmit={ev =>
				handleSubmit(ev, currentUser.id, setIsSubmitting, onSuccess)
			}
		>
			<p className={style.text}>
				Estás seguro de que quieres eliminar al usuario {'"'}
				{currentUser.name}
				{'"'}?
			</p>
			<div className={style.row}>
				<Button
					type='button'
					kind='secondary'
					disabled={isSubmitting}
					onClick={setFiltersForm}
				>
					{isSubmitting ? 'Cargando..' : 'Cancelar'}
				</Button>
				<Button type='submit' disabled={isSubmitting}>
					{isSubmitting ? 'Cargando..' : 'Eliminar usuario'}
				</Button>
			</div>
		</form>
	);
};

const handleSubmit = async (ev, userId, setIsSubmitting, onSuccess) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const success = await deleteUserById(userId);

	if (success) {
		onSuccess();
	} else {
		setIsSubmitting(false);
	}
};

export default UserDeleteForm;
