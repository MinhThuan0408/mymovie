import { IListMovies } from "@/models/HomePage";
import { Link } from "react-router-dom";
import CircleRating from "../component/CircleRating";

interface IHomeProps {
  data: IListMovies[]
}

const Home = (props: IHomeProps) => {
  const { data } = props

  return (
    <div className="list-movies">
      {
        data && data.map((item: IListMovies, index: number) => {
          return (
            <div className="card card-movie" key={index}>
              <div className="poster">
                <Link to={'/movie/' + item.id + '-' + item.original_title}>
                  <img loading="lazy" src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} srcSet={`https://media.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt={item.title} />
                </Link>
              </div>
              <div className="content">
                <Link to={'/movie/' + item.id + '-' + item.original_title}><h2>{item.title}</h2></Link>
                <p>{item.release_date}</p>
                <CircleRating position="absolute" rating={Math.floor(item?.vote_average!)} />
              </div>
            </div>
          )
        })
      }
    </div>

  )
}
export default Home