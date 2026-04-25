'use client';
import { useEffect, useState } from 'react';

interface Anime {
  id: number;
  title: string;
  image_url: string;
  description: string;
  score: number;
}

export default function EventText() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
    
    fetch(`${baseUrl}/api/anime/`, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(`Server responded with ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setAnimes(data);
      })
      .catch((err) => {
        console.error("Error fetching anime:", err);
        setError(err.message);
      });
  }, []);

  const renderCards = () => (
    animes.map((anime, index) => (
      <div 
        key={`${anime.id}-${index}`} 
        className="w-[75vw] sm:w-[22rem] md:w-[26rem] lg:w-[30rem] 2xl:w-[35rem] 3xl:w-[45rem] h-[50vh] sm:h-[32rem] md:h-[36rem] lg:h-[40rem] 2xl:h-[45rem] rounded-2xl sm:rounded-3xl border border-white/5 bg-[var(--background)] overflow-hidden flex flex-col relative group shadow-2xl mx-3 sm:mx-6 shrink-0"
      >
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={anime.image_url} 
            alt={anime.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold line-clamp-2 leading-tight tracking-tight">
            {anime.title}
          </h2>
          <div className="flex items-center mt-2 sm:mt-4 bg-white/5 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/10">
            <span className="text-yellow-400 font-bold text-xs sm:text-sm lg:text-lg">⭐ {(anime.score / 10).toFixed(1)}</span>
          </div>
        </div>
      </div>
    ))
  );

  return (
    <main className="py-12 sm:py-24 w-full overflow-x-hidden bg-[var(--background)] min-h-screen flex flex-col justify-center">
      <div className="font-extrabold text-4xl sm:text-7xl lg:text-8xl 2xl:text-9xl mb-8 sm:mb-16 tracking-tighter text-transparent bg-clip-text text-center bg-[linear-gradient(155.54deg,#CEA33D_30.29%,#6633CC_97.7%)]">
        <p>Trending Now</p>
      </div>

      {animes.length > 0 ? (
        <div className="relative flex w-full">
          <div className="flex animate-infinite-scroll cursor-pointer">
            {renderCards()}
            {renderCards()}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          {!error ? (
            <>
              <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-t-2 border-b-2 border-purple-500 mb-4"></div>
              <p className="text-zinc-500 text-sm sm:text-base font-medium">Fetching from Neon Database...</p>
            </>
          ) : (
            <p className="text-red-500 font-medium">Error: {error}</p>
          )}
        </div>
      )}
    </main>
  );
}