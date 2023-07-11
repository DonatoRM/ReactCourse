import UserRow from './UserRow';

const UsersListRows = ({ users }) => {
	if (users.length <= 0) return 'No hay usuarios';

	return users.map(user => <UserRow key={user.name} {...user} />);
};
export default UsersListRows;
