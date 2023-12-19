import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: null,
    password: null,
    email: null,
  }
}

export const userSlice = createSlice({
  
  //functions => modify state by mutation
})

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