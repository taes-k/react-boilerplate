import App from "./App.js";
import React from "react";
import ReactDom from "react-dom";
import { createStore } from 'redux';
import rootReducer from './store/modules';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);
console.log(store.getState());

ReactDom.render( <Provider store={store}>
                    <App />
                </Provider>, document.getElementById("root"));