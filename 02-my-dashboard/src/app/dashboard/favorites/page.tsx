import { FavoritePokemonsGrid } from "@/app/_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faavoritos",
  description: "djfjkdfhdsf dhjfhjkdsfh",
};

export default async function PokemonPage() {
  return (
    <div className="flex flex-col">
      <span className="text-3xl my-5">
        Pokemos favoritos <small>global state</small>
      </span>
      <FavoritePokemonsGrid />
    </div>
  );
}
