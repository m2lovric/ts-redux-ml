import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feature/counter/counterSlicer';

export const store = configureStore({ reducer: { counter: counterReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
