import UserRow from './UserRow';

const UsersListRows = ({ users, toogleUserActive }) => {
	if (!users.length) return 'No hay usuarios';

	return users.map(user => (
		<UserRow key={user.id} {...user} toogleUserActive={toogleUserActive} />
	));
};
export default UsersListRows;
