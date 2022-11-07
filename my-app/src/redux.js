import rootReducer from "./stores/reducers/rootReducer";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

const reduxConfig = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    return store
}

export default reduxConfig