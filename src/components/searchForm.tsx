import { Search } from "lucide-react";

export function SearchForm() {
  return (
    <form className="flex gap-4">
      <input
        type="text"
        className="flex-1 rounded bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500 focus:outline-1 focus:outline-green-500"
        placeholder="Busque por transações"
      />

      <button
        type="submit"
        className="flex items-center gap-3 p-4 border border-green-300 text-green-300 font-bold rounded hover:bg-green-500 hover:border-green-500 hover:text-white transition-colors ease-in cursor-pointer focus:outline-1 focus:outline-green-500"
      >
        Buscar
        <Search size={20} />
      </button>
    </form>
  );
}
