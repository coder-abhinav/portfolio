import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TestimonialReducer from "./Reducers/TestimonialsSlice";

const rootReducer = combineReducers({
  testimonial: TestimonialReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
