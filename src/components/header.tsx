export function Header() {
  return (
    <header className="bg-gray-900 pt-10 pb-32">
      <div className="w-full max-w-280 mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl">DT Money</h1>

        <button className="h-12.5 bg-green-500 text-white font-bold px-5 rounded cursor-pointer hover:bg-green-700 transition ease-in">
          Nova transação
        </button>
      </div>
    </header>
  );
}
