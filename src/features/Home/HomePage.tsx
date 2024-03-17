import { useLayoutEffect } from "react";
import { getListNowPlayingAction, homePageSelector } from "../../stores/reducer/homePageSlice";
import { useAppDispatch } from "../../utils/useAppDispatch";
import { useAppSelector } from "../../utils/useAppSelector";
import Home from "./Home";


const HomePage = () => {
  const dispatch = useAppDispatch()
  const { listMoviesState } = useAppSelector(homePageSelector);
  useLayoutEffect(() => {
    dispatch(getListNowPlayingAction({ language: 'en-US', page: 1 }))
  }, [])
  return (
    <Home data={listMoviesState.list!} loading={listMoviesState.requesting} />

  )
}
export default HomePage