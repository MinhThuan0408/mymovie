import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovieAction, homePageSelector } from "../../stores/reducer/homePageSlice";
import { useAppDispatch } from "../../utils/useAppDispatch";
import { useAppSelector } from "../../utils/useAppSelector";
import DetailMovie from "./DetailMovie";

interface IParams {
  id: string
}

const DetailMoviePage = () => {
  const dispatch = useAppDispatch()

  const { id }: IParams = useParams()

  const { detailMoviesState } = useAppSelector(homePageSelector);

  const [data, setData] = useState()

  const fetch = require('node-fetch');

  useLayoutEffect(() => {
    if (id) {
      const str = id.split('-')


      dispatch(getDetailMovieAction({ language: 'en-US', movie_id: parseInt(str[0]) }))

      const url = 'https://api.themoviedb.org/3/movie/' + str[0] + '?language=en-US';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzkzZmM3MDY5ZWEyZGM3MDUxYmQ2MDQxZjAyNTg2MyIsInN1YiI6IjY1ZjI5N2YxMDZmOTg0MDE0ODQzMTAyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4l4ZrOc-BoKpqDSO9WWANGCxyCwWzaR_EQ-9WJdEbUk'
        }
      };

      fetch(url, options)
        .then((res: { json: () => any; }) => res.json())
        .then((json: any) => setData(json))
        .catch((err: string) => console.error('error:' + err));
    }
  }, [id])

  return (
    <DetailMovie data={data!} />
  )
}

export default DetailMoviePage