import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
// import rpm from "redux-promise-middleware";
import thunk from "redux-thunk";

import reducers from "./reducers";

// const logger = createLogger();
const enhancers = applyMiddleware(thunk, logger);
const store = createStore(reducers, enhancers);
// state = {auth, theme}
// 2 parameter = reducer & enhancer (opt)
// enhancer = middleware

export default store;
