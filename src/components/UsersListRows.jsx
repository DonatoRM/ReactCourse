import UserRow from './UserRow';

const UsersListRows = ({ users }) => {
	if (!users.length) return 'No hay usuarios';

	return users.map(user => <UserRow key={user.username} {...user} />);
};
export default UsersListRows;
