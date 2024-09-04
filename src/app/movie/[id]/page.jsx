const API_KEY = process.env.API_KEY;
export default async function page({ params }) {
  const id = params.id;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const data = await fetch(url);
  const movie = await data.json();
  console.log(movie);
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden text-black">
          {/* <div className="relative aspect-w-16 aspect-h-9">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt={movie.title}
              className="object-cover"
            />
          </div> */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 line-clamp-2">
              {movie.title}
            </h1>
            <p className="text-gray-600 mb-4">{movie.tagline}</p>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm text-yellow-400">Rating:</span>
              <span className="font-bold">{movie.vote_average.toFixed(1)}</span>
              <span className="text-sm text-gray-600">/10</span>
              <span className="text-sm text-gray-600">
                ({movie.vote_count} votes)
              </span>
            </div>
            <p className="text-lg mb-6">{movie.overview}</p>
            <h2 className="text-xl font-semibold mb-2">Production Info</h2>
            <ul className="space-y-2 mb-4">
              <li>
                Studio: {movie.production_companies[0]?.name || "Unknown"}
              </li>
              <li>Country: {movie.origin_country}</li>
              <li>Language: {movie.original_language}</li>
              <li>Status: {movie.status}</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Release Details</h2>
            <ul className="space-y-2 mb-4">
              <li>Date: {new Date(movie.release_date).toLocaleDateString()}</li>
              <li>Revenue: ${movie.revenue.toLocaleString()}</li>
              <li>Budget: ${movie.budget.toLocaleString()}</li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Technical Specs</h2>
            <ul className="space-y-2 mb-4">
              <li>Runtime: {movie.runtime} minutes</li>
              <li>
                Spoken Languages:{" "}
                {movie.spoken_languages.map((lang) => lang.name).join(", ")}
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
