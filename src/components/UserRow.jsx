import UserRole from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ id, name, active, role, toogleUserActive }) => (
	<div className={style.wrapper}>
		<div className={style.name}>
			<span>{name}</span>
		</div>
		<div className={style.status}>
			<UserStatus active={active} />
		</div>
		<div className={style.role}>
			<UserRole role={role} />
		</div>
		<div className={style.action}>
			<button onClick={() => toogleUserActive(id)}>
				{active ? 'Desactivar' : 'Activar'}
			</button>
		</div>
	</div>
);
export default UserRow;
