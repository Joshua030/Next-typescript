interface CategoryProps {
  params: {
    id: string;
  };
}

export default async function CategoryPage({ params }: CategoryProps) {
  const { id } = await params;
  return (
    <div>
      <h1>Hello Page {id}</h1>
    </div>
  );
}
