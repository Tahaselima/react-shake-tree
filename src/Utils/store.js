import {createStore} from "redux";

import reducersCombined from './reducers';

export const store = createStore(reducersCombined);


