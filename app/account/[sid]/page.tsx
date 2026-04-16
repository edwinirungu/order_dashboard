export default async function Page({ params }) {
  console.log(await params);
  const { sid } = await params;
  return (
    <div>
      <h1>Account detail {sid}</h1>
    </div>
  );
}
