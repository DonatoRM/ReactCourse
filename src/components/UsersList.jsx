import UserRow from './UserRow';
import style from './UsersList.module.css';
const UsersList = ({ users, children }) => {
	const usersRender = users.map(user => <UserRow key={user.name} {...user} />);
	return (
		<div className={style.list}>
			{children}
			{usersRender}
		</div>
	);
};
export default UsersList;
