import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authSlice from './auth';

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'INCREASEBY5') {
//         const { amount } = action;
//         return {
//             counter: state.counter + amount,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         };
//     }

//     return state;
// };

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authSlice.reducer
    }
});

// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'INCREMENT' });

export default store;