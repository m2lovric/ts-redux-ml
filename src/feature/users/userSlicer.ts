import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  id: string;
  name: string;
  age: number;
}

export interface CounterState {
  value: IUser[];
}

const initialState: CounterState = {
  value: [],
};

export const userSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: any) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = userSlicer.actions;

export default userSlicer.reducer;
