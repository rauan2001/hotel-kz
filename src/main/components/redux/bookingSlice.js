import { createSlice } from '@reduxjs/toolkit';

export const bookingDataSlice = createSlice({
  name: 'bookingData',
  initialState: {
    checkInDate: '',
    checkOutDate: '',
    adults: null,
    children: null,
  },
  reducers: {
    setBookingData: (state, action) => {
      state.checkInDate = action.payload.checkInDate;
      state.checkOutDate = action.payload.checkOutDate;
      state.adults = action.payload.adults;
      state.children = action.payload.children;
    }
  }
});

export const { setBookingData } = bookingDataSlice.actions;

export default bookingDataSlice.reducer;
