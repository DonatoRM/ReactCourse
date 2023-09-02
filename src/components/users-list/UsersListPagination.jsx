import style from './UsersListPagination.module.css';
import PageSelector from '../forms/PageSelector';
import Select from '../forms/Select';
import { PAGINATION } from '../../constants/pagination';

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
						type: 'items_per_page_changed',
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
				dispatchFilters({ type: 'page_changed', value: newPage })
			}
		/>
	</div>
);

export default UsersListPagination;
