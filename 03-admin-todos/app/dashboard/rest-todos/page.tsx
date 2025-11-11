export const dynamic = "auto";
import { NewTodo, TodosGrid } from "@/app/_features/todos";
import prisma from "@/lib/prisma";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Listado de Todos",
  description: "SEO Title",
};

export default async function TodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
