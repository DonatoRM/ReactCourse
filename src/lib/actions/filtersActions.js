import { FILTERS_ACTIONS } from '../../constants/filtersActions';

export const searchChanged = search => ({
	type: FILTERS_ACTIONS.SEARCH,
	value: search
});
export const onlyActiveChanged = onlyActive => ({
	type: FILTERS_ACTIONS.ONLY_ACTIVE,
	value: onlyActive
});
export const sortByChanged = sortBy => ({
	type: FILTERS_ACTIONS.SORT_BY,
	value: sortBy
});
export const pageChanged = page => ({
	type: FILTERS_ACTIONS.PAGE,
	value: page
});
export const itemsPerPageChanged = itemsPerPage => ({
	type: FILTERS_ACTIONS.ITEMS_PER_PAGE,
	value: itemsPerPage
});
export const reset = () => ({
	type: FILTERS_ACTIONS.RESET
});
