import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article';

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
  preloadedState: {
    [articleApi.reducerPath]: {
      // Set the baseQuery endpoint to the new server endpoint
      baseQuery: {
        baseUrl: 'http://localhost:3000/api',
      },
    },
  },
});