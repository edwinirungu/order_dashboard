export default async function Page({ params }: { sid: string }) {
  const { id } = await params;
  return (
    <div>
      <h1>Country {id}</h1>
    </div>
  );
}
