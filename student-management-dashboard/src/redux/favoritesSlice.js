// src/redux/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

/**
 * Redux Slice for managing favorite students
 * State: { favorites: [] }
 */
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [], // Array to store favorite student objects
  },
  reducers: {
    /**
     * Add a student to favorites
     * Prevents duplicates by checking if student already exists
     */
    addFavorite: (state, action) => {
      const student = action.payload;
      const exists = state.favorites.find(fav => fav.id === student.id);
      
      if (!exists) {
        state.favorites.push(student);
      }
    },

    /**
     * Remove a student from favorites by ID
     */
    removeFavorite: (state, action) => {
      const studentId = action.payload;
      state.favorites = state.favorites.filter(fav => fav.id !== studentId);
    },

    /**
     * Clear all favorites
     */
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

// Export actions for use in components
export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;

// Export reducer for store configuration
export default favoritesSlice.reducer;