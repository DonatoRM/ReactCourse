import style from './UsersList.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';
import { useFilters } from '../../lib/hooks/useFilters';
import UsersListPagination from './UsersListPagination';
import { useUsers } from '../../lib/hooks/useUsers';
import UserFormContainer from '../user-forms/UserFormContainer';
import UserFormsProviders from '../providers/UserFormsProvider';
import UsersListViewSelector from './UsersListViewSelector';
import { useState } from 'react';

const UsersList = () => {
	const [view, setView] = useState(true);

	const { filters, filtersSetters, paginationSetters, resetFilters } =
		useFilters();

	const { users, usersCount, usersError, usersLoading } = useUsers(filters);

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UserFormsProviders resetFilters={resetFilters}>
				<UsersListFilters
					search={filters.search}
					onlyActive={filters.onlyActive}
					sortBy={filters.sortBy}
					{...filtersSetters}
				/>
				<UserFormContainer />
				<UsersListViewSelector view={view} setView={setView} />
				<UsersListRows
					users={users}
					error={usersError}
					loading={usersLoading}
					view={view}
				/>
			</UserFormsProviders>
			<UsersListPagination
				page={filters.page}
				itemsPerPage={filters.itemsPerPage}
				{...paginationSetters}
				totalUsers={usersCount}
			/>
		</div>
	);
};

export default UsersList;
