import {createStore, Store} from "redux";

import {initialState, rootReducer} from './rootReducer';
import {IGameState} from "./types";

const store: Store<IGameState> = createStore(rootReducer, initialState);
export default store;
