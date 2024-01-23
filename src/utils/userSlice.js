import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    revoveUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, revoveUser } = userSlice.actions;
export default userSlice.reducer;
