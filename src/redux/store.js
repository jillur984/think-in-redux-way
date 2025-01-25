// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counter/counterReducer";

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// export default store;

import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";

const store = createStore(counterReducer);
export default store;
