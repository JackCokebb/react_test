import Movie from "../components/Movie";
import { useEffect, useState } from "react";

function Home(){
    
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  //async-await method
  const getMovies = async() =>{
    const KORMOVIE_KEY = process.env.REACT_APP_KORMOVIE_API_KEY;
    const response = await fetch(
      "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=" + KORMOVIE_KEY +"&targetDt=20220701&multiMovieYn=N"
    );
    const json = await response.json();
    console.log(json);
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  }

  useEffect(()=>{
    getMovies();
  },[])
  console.log(movies);



  return (
    <div>
      {loading ? <h2>Loading...</h2> : 
        <div>
          {movies.map((movie)=>
            <Movie 
                key={movie.movieCd} 
                id={movie.movieCd}
                movieNm={movie.movieNm} 
                openDt={movie.openDt}
            />
          )}
        </div>
      }
    </div>
  );
}

export default Home;