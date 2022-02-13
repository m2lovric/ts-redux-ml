import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  id: string;
  name: string;
  age: number;
}

export interface UserState {
  value: IUser[];
}

const initialState: UserState = {
  value: [],
};

export const userSlicer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = userSlicer.actions;

export default userSlicer.reducer;
