"use client";
import { useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { useAppSelector } from "@/store";

export const FavoritePokemonsGrid = () => {
  const pokemonsObject = useAppSelector((state) => state.pokemons);
  const favoritePokemons = Object.values(pokemonsObject);
  const [pokemons, setPokemons] = useState(favoritePokemons);
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons?.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};
