import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import newsReducer from '../reducers/news';
import standingsReducer from '../reducers/standings';
import fixturesReducer from '../reducers/fixtures';
import teamsReducer from '../reducers/teams';

const store = createStore(
	combineReducers({
		news: newsReducer,
		standings: standingsReducer,
		fixtures: fixturesReducer,
		teams: teamsReducer,
	}),
	composeWithDevTools(applyMiddleware(thunk)),
);

export default () => store;
