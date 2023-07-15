import UserRow from './UserRow';

const UsersListRows = ({ users, toggleUserActive }) => {
	if (!users.length) return 'No hay usuarios';

	return users.map(user => (
		<UserRow key={user.id} {...user} toggleUserActive={toggleUserActive} />
	));
};
export default UsersListRows;
