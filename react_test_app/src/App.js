import { useEffect, useState } from "react";
// import dotenv from "dotenv";
// dotenv.config({ path: "../.env", encoding: "utf8" });

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  //async-await method
  const getMovies = async() =>{
    const KORMOVIE_KEY = process.env.REACT_APP_KORMOVIE_API_KEY;
    const response = await fetch(
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=" + KORMOVIE_KEY +"&targetDt=20220701&multiMovieYn=N"
    );
    const json = await response.json();
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
            <div key={movie.rnum}>
              <h2>{movie.movieNm}</h2>
              {movie.openDt}
              <hr/>
            </div>)}
        </div>
      }
    </div>
  );
}

export default App;


//381408b8091a06fbde49af9be458c70f

//http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=381408b8091a06fbde49af9be458c70f&targetDt=20220701&multiMovieYn=N