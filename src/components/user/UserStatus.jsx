import style from './UserStatus.module.css';
import CheckCircleIcon from '../icons/CheckCircleIcon';
import CrossCircleIcon from '../icons/CrossCircleIcon';
const UserStatus = ({ active }) => {
	const activeClassname = active ? style.active : style.inactive;
	const Icon = active ? CheckCircleIcon : CrossCircleIcon;
	return (
		<div className={activeClassname}>
			<Icon className={style.icon} />
			<span>{active ? 'Activo' : 'Inactivo'}</span>
		</div>
	);
};
export default UserStatus;
