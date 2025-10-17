import { Middleware } from "@reduxjs/toolkit";
import { toggleFavorite } from "../pokemons/pokemons"; // adjust path
import type { SimplePokemon } from "@/app/_types/pokemonTypes";

export const localStorageMiddleware: Middleware =
  (api) => (next) => (action) => {
    const result = next(action);

    if (toggleFavorite.match(action)) {
      const { pokemons } = api.getState() as {
        pokemons: Record<string, SimplePokemon>;
      };
      localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
    }
    return result;
  };
