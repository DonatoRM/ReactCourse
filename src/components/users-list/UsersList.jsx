import style from './UsersList.module.css';
import UsersListFilters from './UsersListFilters';
import UsersListRows from './UsersListRows';
import UsersListPagination from './UsersListPagination';
import { useUsers } from '../../lib/hooks/useUsers';
import UserFormContainer from '../user-forms/UserFormContainer';
import UserFormsProviders from '../providers/UserFormsProvider';
import UsersListViewSelector from './UsersListViewSelector';
import { useReducer, useState } from 'react';
import {
	FILTERS_INITIAL_STATE,
	filtersReducer
} from '../../lib/reducers/filtersReducer';
import { reset } from '../../lib/actions/filtersActions';

const UsersList = () => {
	const [showRowsFormat, setShowRowsFormat] = useState(true);

	const [filters, dispatchFilters] = useReducer(
		filtersReducer,
		FILTERS_INITIAL_STATE
	);

	const { users, totalUsers, usersError, usersLoading } = useUsers(filters);

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Listado de usuarios</h1>
			<UserFormsProviders resetFilters={() => dispatchFilters(reset())}>
				<UsersListFilters
					search={filters.search}
					onlyActive={filters.onlyActive}
					sortBy={filters.sortBy}
					dispatchFilters={dispatchFilters}
				/>
				<UserFormContainer />
				<UsersListViewSelector
					showRowsFormat={showRowsFormat}
					setShowRowsFormat={setShowRowsFormat}
				/>
				<UsersListRows
					users={users}
					error={usersError}
					loading={usersLoading}
					view={showRowsFormat}
				/>
			</UserFormsProviders>
			<UsersListPagination
				page={filters.page}
				itemsPerPage={filters.itemsPerPage}
				dispatchFilters={dispatchFilters}
				totalUsers={totalUsers}
			/>
		</div>
	);
};

export default UsersList;
