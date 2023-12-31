import { createSlice } from "@reduxjs/toolkit";

const initialState: ModeType = 'All';

const modeSlice = createSlice({
  name: 'modeSlice',
  initialState,
  reducers: {
    setMode(state, {payload}) {
      return payload;
    }
  }
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;