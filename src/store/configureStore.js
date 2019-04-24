import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import CoreReducer from '../modules/core/coreReducer';
import RootReducer from '../modules/rootReducer';


const rootReducer = combineReducers({
  core: CoreReducer,
  root: RootReducer,
});

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  blacklist: ['root'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = compose;


export const store = createStore(
  pReducer,
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export const persistor = persistStore(store);
