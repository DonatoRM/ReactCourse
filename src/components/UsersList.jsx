import { useState } from 'react';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';
import style from './UsersList.module.css';
const UsersList = ({ users }) => {
	const { search, onlyActive, sortBy, setSearch, setOnlyActive, setSortBy } =
		UseFilters();

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className={style.wrapper}>
			<h1>Listado de usuarios</h1>
			<UsersListFilters
				search={search}
				setSearch={setSearch}
				onlyActive={onlyActive}
				setOnlyActive={setOnlyActive}
				sortBy={sortBy}
				setSortBy={setSortBy}
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
const UseFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	});
	const { search, onlyActive, sortBy } = filters;
	const setSearch = () => {
		setFilters({ ...filters, search });
	};
	const setOnlyActive = () => {
		setFilters({ ...filters, onlyActive });
	};
	const setSortBy = () => {
		setFilters({ ...filters, sortBy });
	};
	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy
	};
};

export default UsersList;
