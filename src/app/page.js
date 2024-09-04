const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const url = `https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const results = data.results
    console.log(results);
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((result) => (
            <div
              key={result.id}
              className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${result.backdrop_path || result.poster_path}`}
                alt={`${result.original_title || result.original_name} Poster`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-white line-clamp-1 mb-2">{result.original_title || result.original_name}</h2>
                <p className="text-gray-300 line-clamp-3">{result.overview}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-yellow-400">Rating: {result.vote_average.toFixed(1)}</span>
                  <button className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  } catch (err) {
    console.error('An error occurred:', err);
    return (
      <div>
        <h2>Error fetching movies</h2>
        <p>{err.message}</p>
      </div>
    );
  }
}
