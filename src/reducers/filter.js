import { CHANGE_FILTER } from '../actions';

const filterReducer = (state = 'All', action) => ((action.type === CHANGE_FILTER) ? action.filter : state);

export default filterReducer;
