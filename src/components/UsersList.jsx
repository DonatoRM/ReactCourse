import style from './UsersList.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';
import { useFilters } from '../lib/hooks/useFilters';
import UsersListPagination from './UsersListPagination';
import { useUsers } from '../lib/hooks/useUsers';
import InputTextAsync from './forms/InputTextAsync';

const UsersList = () => {
	const {
		filters,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsPerPage
	} = useFilters();

	const { users, totalPages, error, loading } = useUsers(filters);

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UsersListFilters
				search={filters.search}
				onlyActive={filters.onlyActive}
				sortBy={filters.sortBy}
				setSearch={setSearch}
				setOnlyActive={setOnlyActive}
				setSortBy={setSortBy}
			/>
			<UsersListRows users={users} error={error} loading={loading} />
			<UsersListPagination
				page={filters.page}
				itemsPerPage={filters.itemsPerPage}
				setPage={setPage}
				setItemsPerPage={setItemsPerPage}
				totalPages={totalPages}
			/>
		</div>
	);
};

export default UsersList;
