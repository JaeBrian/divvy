import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:8000/getuser/${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const fetchLogin = createAsyncThunk(
//   'login/fetchUser',
//   async (username, thunkAPI) => {
//     try {
//       const respone = await fetch('http://localhost:8000/login/${username}');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const initialState = {
  login: {},
  user: {
    _id: null,
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    password: null,
    subscriptions: [],
  },
  // hasPaid: false,
  modalOpen: false,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    toggleHasPaid: (state) => {
      state.hasPaid = !state.hasPaid;
    },
    setIsModalOpen: (state) => {
      state.modalOpen = !state.modalOpen;
    },
    setLoginInfo: (state) => {
      state.login = action.payload;
    },
    // swapHasPaid: (state) => {
    //   state.user.subscriptions.subscribers.hasPaid =
    //     !state.user.subscriptions.subscribers.hasPaid;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { toggleHasPaid, setIsModalOpen, swapHasPaid } = userSlice.actions;
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
