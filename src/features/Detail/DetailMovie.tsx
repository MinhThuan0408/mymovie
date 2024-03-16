import { BookmarkOutline, HeartOutline, ListOutline, PlayOutline, StarOutline } from "react-ionicons"
import { IDetailMovies, ProductionCompanies } from "../../models/HomePage"
import CircleRating from "../component/CircleRating"
import { BGDetail } from "./styled"

interface IPropsData {
  data: IDetailMovies
}


const DetailMovie = (props: IPropsData) => {
  const { data } = props

  function convertMinutesToHoursAndMinutes(minutes: number) {
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes % 60;
    return hours + " h " + remainingMinutes + " m";
  }

  return (
    data ?
      <BGDetail>
        <div className="bg-detail" style={{ backgroundImage: `url(${`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`})` }}>
          <div className="bg-detail-custom">
            <div className="detail">
              <div className="detail__poster">
                <div className="wrapper">
                  <img alt={data.original_title} src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`} className="cover-image" />
                </div>
                <img alt={data.original_title} src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}`} className="character" />

              </div>
              <div className="detail__content">
                <div className="title">
                  <h2>{data.original_title}</h2>
                  <div className="fact">
                    <span className="certification">
                      PG
                    </span>
                    <span className="release">
                      {data.release_date}
                    </span>
                    <span className="genres">
                      {data.genres?.map((item) => {
                        return (
                          <>
                            <span>{item.name}</span>,
                            &nbsp;
                          </>
                        )
                      })}

                    </span>
                    <span className="runtime">
                      {convertMinutesToHoursAndMinutes(data.runtime!)}
                    </span>
                  </div>
                </div>
                <div className="action">
                  <div className="chart">
                    <CircleRating rating={Math.floor(data.vote_average! * 10)} />
                    <span>User <br /> score</span>
                  </div>
                  <span className="icon" title="Mark as favorite">
                    <ListOutline
                      color={'#fff'}
                      height="15px"
                      width="15px"
                    />
                  </span>

                  <span className="icon" >
                    <HeartOutline
                      color={'#fff'}
                      height="15px"
                      width="15px"
                    />
                  </span>
                  <span className="icon" >
                    <BookmarkOutline
                      color={'#fff'}
                      height="15px"
                      width="15px"
                    />
                  </span>
                  <span className="icon" >
                    <StarOutline
                      color={'#fff'}
                      height="15px"
                      width="15px"
                    />
                  </span>
                  <div className="none-play">

                    <PlayOutline
                      color={'#fff'}
                      height="25px"
                      width="25px"
                    />
                    <span>Play trailer</span>
                  </div>
                </div>
                <div className="info">
                  <h3 className="tagline">{data.title}</h3>
                  <h3 >Overview</h3>
                  <div className="overview"  >
                    <p>{data.overview}</p>
                  </div>

                  <ol className="people no_image">
                    {
                      data.production_companies?.map((item: ProductionCompanies, index: number) => {
                        return (
                          <li className="profile" key={index}>
                            <p><a href="#">{item.name}</a></p>
                            <p className="character">{item.origin_country}</p>
                          </li>
                        )
                      })
                    }
                  </ol>

                </div>
              </div>
            </div>
          </div>
        </div>
      </BGDetail>
      :
      <div>No data</div>

  )
}
export default DetailMovie