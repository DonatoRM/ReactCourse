import style from './UsersListPagination.module.css';
import PageSelector from '../forms/PageSelector';
import Select from '../forms/Select';
import { PAGINATION } from '../../constants/pagination';
import { FILTERS_ACTIONS } from '../../constants/filtersActions';

const UsersListPagination = ({
	page,
	itemsPerPage,
	dispatchFilters,
	totalUsers
}) => (
	<div className={style.wrapper}>
		<div className={style.itemsPerPage}>
			<Select
				value={itemsPerPage}
				onChange={ev =>
					dispatchFilters({
						type: FILTERS_ACTIONS.ITEMS_PER_PAGE,
						value: Number(ev.target.value)
					})
				}
			>
				{PAGINATION.ITEMS_PER_PAGE_VALUES.map(value => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</Select>
			<p>Elementos por página</p>
		</div>
		<PageSelector
			page={page}
			totalPages={Math.ceil(totalUsers / itemsPerPage)}
			setPage={newPage =>
				dispatchFilters({ type: FILTERS_ACTIONS.PAGE, value: newPage })
			}
		/>
	</div>
);

export default UsersListPagination;
