import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../components/button';

const PokemonSearch = () => {
  // check now
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results))
      .catch(() => setError('Failed to fetch Pokémon list'));
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const filtered = pokemonList.filter((p) =>
        p.name.includes(query.toLowerCase()),
      );
      setFilteredPokemon(filtered);
    } else {
      setFilteredPokemon([]);
    }
  }, [query, pokemonList]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div
      className="flex flex-col items-center p-4"
      data-testid="pokemon-search"
    >
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Pokémon"
          className="p-2 border border-gray-300 rounded"
        />
        <Button type="submit">Search</Button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {filteredPokemon.length > 0 && (
        <ul className="mt-4 w-64 border border-gray-300 rounded p-2 bg-white shadow-md">
          {filteredPokemon.map((p) => (
            <li key={p.name} className="p-2 border-b last:border-none">
              {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonSearch;
