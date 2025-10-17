//rxslice add slice
import { SimplePokemon } from "@/app/_types/pokemonTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonState => {

//     const favorites = JSON.parse(
//       localStorage.getItem("favorite-pokemons") ?? "{}"
//     );
//     return favorites;
// };

const initialState: PokemonState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      }

      state.favorites[id] = pokemon;
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
