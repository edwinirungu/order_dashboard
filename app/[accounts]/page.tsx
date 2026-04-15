export default async function Page({ params }) {
  const { accounts } = await params;
  return (
    <div>
      <h1>{accounts}</h1>
    </div>
  );
}
