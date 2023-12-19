import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    username: null,
    password: null,
    email: null,
  },
  hasPaid: false,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    toggleHasPaid: (state) => {
      state.hasPaid = !state.hasPaid;
    },
  },
});

export const { toggleHasPaid } = userSlice.actions;
export default userSlice.reducer;

//export const deconstructed functions here userSlice.actions

// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// })

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi
