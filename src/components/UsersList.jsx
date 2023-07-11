import { useState } from 'react';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';
import style from './UsersList.module.css';
const UsersList = ({ users }) => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	});

	let usersFiltered = filterActiveUsers(users, filters.onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, filters.search);
	usersFiltered = sortUsers(usersFiltered, filters.sortBy);

	return (
		<div className={style.wrapper}>
			<h1>Listado de usuarios</h1>
			<UsersListFilters
				search={filters.search}
				setSearch={search => setFilters({ ...filters, search })}
				onlyActive={filters.onlyActive}
				setOnlyActive={onlyActive => setFilters({ ...filters, onlyActive })}
				sortBy={filters.sortBy}
				setSortBy={sortBy => setFilters({ ...filters, sortBy })}
			/>
			<UsersListRows users={usersFiltered} />
		</div>
	);
};
const filterUsersByName = (users, search) => {
	if (!search) return [...users];

	const lowerCasedSearch = search.toLowerCase();

	return users.filter(user =>
		user.name.toLowerCase().startsWith(lowerCasedSearch)
	);
};

const filterActiveUsers = (users, active) => {
	if (!active) return [...users];

	return users.filter(user => user.active);
};

const sortUsers = (users, sortBy) => {
	const sortedUsers = [...users];
	switch (sortBy) {
		case 1:
			return sortedUsers.sort((a, b) => {
				if (a.name > b.name) return 1;
				if (a.name < b.name) return -1;
				return 0;
			});
		default:
			return sortedUsers;
	}
};

export default UsersList;
