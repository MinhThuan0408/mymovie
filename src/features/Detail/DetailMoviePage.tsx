import { useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
    if (id) {
      const str = id.split('-')
      dispatch(getDetailMovieAction({ language: 'en-US', movie_id: parseInt(str[0]) }))
    }
  }, [id])

  return (
    <DetailMovie data={detailMoviesState.single!} loading={detailMoviesState.requesting} />
  )
}

export default DetailMoviePage