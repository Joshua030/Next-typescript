import { PokemonGrid } from "@/app/_components";
import { PokemonsResponse, SimplePokemon } from "@/app/_types/pokemonTypes";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonsResponse = await res.json();

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemons(150);

  return (
    <div className="flex flex-col">
      <span className="text-3xl my-5">
        Listado de pokemons <small>Estatico</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
