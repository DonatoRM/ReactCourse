import style from './UserFormContainer.module.css';
import IconButton from '../buttons/IconButton';
import CrossIcon from '../icons/CrossIcon';
import { useContext } from 'react';
import { UserFormsContext } from '../../lib/contexts/UserFormsContext';
import { USER_FORMS } from '../../constants/userForms';
import UserCreateForm from './UserCreateForm';
import UserEditForm from './UserEditForm';
import UserDeleteForm from './UserDeleteForm';

const FORMS = {
	[USER_FORMS.CREATE]: <UserCreateForm />,
	[USER_FORMS.EDIT]: <UserEditForm />,
	[USER_FORMS.DELETE]: <UserDeleteForm />
};

const UserFormContainer = () => {
	const { currentForm, setFiltersForm } = useContext(UserFormsContext);

	const form = FORMS[currentForm];

	if (!form) return null;

	return (
		<div className={style.wrapper}>
			<IconButton
				className={style.close}
				icon={CrossIcon}
				filled
				onClick={setFiltersForm}
			/>
			{form}
		</div>
	);
};

export default UserFormContainer;
