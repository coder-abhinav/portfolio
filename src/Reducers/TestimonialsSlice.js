import { createSlice } from "@reduxjs/toolkit";

const TestemonialSlice = createSlice({
  name: "testimonial",
  initialState: {
    isTestimonialModalOpen: false,
  },
  reducers: {
    setIsTestimonialModalOpen(state, action) {
      state.isTestimonialModalOpen = action.payload;
    },
  },
});

export const { setIsTestimonialModalOpen } = TestemonialSlice.actions;
export default TestemonialSlice.reducer;
