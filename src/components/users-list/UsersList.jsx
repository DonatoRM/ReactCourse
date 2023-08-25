import style from './UsersList.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';
import { useFilters } from '../../lib/hooks/useFilters';
import UsersListPagination from './UsersListPagination';
import { useUsers } from '../../lib/hooks/useUsers';
import UserFormContainer from '../user-forms/UserFormContainer';
import { getUsersToDisplay } from '../../lib/users/filterUsers';
import UserFormsProviders from '../providers/UserFormsProvider';
import UsersListViewSelector from './UsersListViewSelector';
import { useState } from 'react';

const UsersList = () => {
	const [view, setView] = useState(true);
	const {
		filters,
		pagination,
		filtersSetters,
		paginationSetters,
		resetFilters
	} = useFilters();

	const { users, usersError, usersLoading, reloadUsers } = useUsers();

	const { paginatedUsers, totalPages } = getUsersToDisplay(
		users,
		filters,
		pagination
	);

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UserFormsProviders resetFilters={resetFilters} reloadUsers={reloadUsers}>
				<UsersListFilters {...filters} {...filtersSetters} />
				<UsersListViewSelector view={view} setView={setView} />
				<UserFormContainer />
				<UsersListRows
					users={paginatedUsers}
					error={usersError}
					loading={usersLoading}
					view={view}
				/>
			</UserFormsProviders>
			<UsersListPagination
				{...pagination}
				{...paginationSetters}
				totalPages={totalPages}
			/>
		</div>
	);
};

export default UsersList;
