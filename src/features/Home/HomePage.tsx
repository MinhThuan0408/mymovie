import { useLayoutEffect } from "react";
import { getListNowPlayingAction, homePageSelector } from "../../stores/reducer/homePageSlice";
import { useAppDispatch } from "../../utils/useAppDispatch";
import { useAppSelector } from "../../utils/useAppSelector";
import Home from "./Home";


const HomePage = () => {
  const dispatch = useAppDispatch()
  const { listMoviesState } = useAppSelector(homePageSelector);
  useLayoutEffect(() => {
    dispatch(getListNowPlayingAction({ language: 'en- US', page: 1 }))
  }, [])

  const fetch = require('node-fetch');

  const url = 'https://api.themoviedb.org/3/movie/1011985?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzkzZmM3MDY5ZWEyZGM3MDUxYmQ2MDQxZjAyNTg2MyIsInN1YiI6IjY1ZjI5N2YxMDZmOTg0MDE0ODQzMTAyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4l4ZrOc-BoKpqDSO9WWANGCxyCwWzaR_EQ-9WJdEbUk'
    }
  };

  fetch(url, options)
    .then((res: { json: () => any; }) => res.json())
    .then((json: any) => console.log(json))
    .catch((err: string) => console.error('error:' + err));

  return (
    <Home data={listMoviesState.list!} />

  )
}
export default HomePage