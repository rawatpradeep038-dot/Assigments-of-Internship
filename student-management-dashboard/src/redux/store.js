// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';

/**
 * Redux Store Configuration
 * Combines all reducers for the application
 */
const store = configureStore({
  reducer: {
    favorites: favoritesReducer, // favorites state slice
  },
});

export default store;