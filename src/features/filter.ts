import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FilterState = 'all' | 'active' | 'completed';

const initialState = {
  query: '',
  status: 'all' as FilterState,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => ({
      ...state,
      query: action.payload,
    }),
    setStatus: (state, action: PayloadAction<FilterState>) => ({
      ...state,
      status: action.payload,
    }),
    clearFilter: () => ({
      query: '',
      status: 'all' as FilterState,
    }),
  },
});

export const { setQuery, setStatus, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
