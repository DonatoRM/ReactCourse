import { useState } from 'react';
import UserRow from './UserRow';
import style from './UsersList.module.css';
const UsersList = ({ users, children }) => {
	const [search, setSearch] = useState('');

	const normalizeSearch = search.toLowerCase();

	const usersFiltered = search
		? users.filter(user => user.name.toLowerCase().startsWith(normalizeSearch))
		: users;

	const usersRender =
		usersFiltered.length > 0
			? usersFiltered.map(user => <UserRow key={user.name} {...user} />)
			: 'No hay usuarios';
	return (
		<div className={style.wrapper}>
			{children}

			<input
				type='text'
				name='search'
				value={search}
				onChange={ev => setSearch(ev.target.value)}
			></input>
			{usersRender}
		</div>
	);
};
export default UsersList;
