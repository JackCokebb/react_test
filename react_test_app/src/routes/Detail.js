// ** useParams gets params from URL **
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

function Detail(){
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState();
    //const x = useParams()
    const {id} = useParams()
    console.log(id);
    
    useEffect(()=>{
        const getDetail = async()=>{
            const json = await ( await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${id}`))
            .json();
            console.log(json);
            setDetail(json.movieInfoResult.movieInfo);
            setLoading(false)
        };
        getDetail();
    },[id])

    return (
        <div>
            <h1>Detail</h1>
            
            {loading ? "Loading..." :
                <div>
                    <h2>{detail.movieNm}/ {detail.movieNmEn}</h2>
                    <hr/>
                    <h3>Genre</h3>
                    <ul>
                        {detail.genres.map((genre)=><li key={genre.genreNm}>{genre.genreNm}</li>)}
                    </ul>

                </div>

            }
        </div>
    );
}

export default Detail;

//http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=20124079