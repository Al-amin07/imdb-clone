
const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {

  const type = searchParams?.type || 'trending';


  const res = await fetch(`https://api.themoviedb.org/3${type === 'toprated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`)

  const data = await res.json();
  // console.log('ii',data.results);
  if (!res.ok) {
    throw new Error('Failed To fetch Data')
  }
  const movies = data.results
  return (
    <div className="grid grid-cols-5 gap-5">
      {
        movies.map(item => <div className="p-5 border-2 " key={item.id}>
          <img src={item.backdrop_path} />
          <h2>{item.original_title}</h2>
          <p className=" line-clamp-2">{item.overview}</p>
        </div>)
      }
    </div>
  );
}
