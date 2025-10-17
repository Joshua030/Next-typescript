import { WidgetsGrid } from "@/app/_components";

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <div className="mt-2 text-3xl">Dashboard</div>
      <div className="text-xl">Informacion general</div>
      <WidgetsGrid />
    </div>
  );
}
