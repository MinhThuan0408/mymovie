import { useRef } from "react";
import { Link } from "react-router-dom";
import { getListNowPlayingAction, getListSearchAction, getListTopRatedAction } from "../../stores/reducer/homePageSlice";
import { useAppDispatch } from "../../utils/useAppDispatch";

const Header = () => {

  const dispatch = useAppDispatch()
  const typingSearch = useRef(null as any);

  const onGetListMoviesNowPlaying = () => {
    dispatch(getListNowPlayingAction({ language: 'en-US', page: 1 }))
  }
  const onGetListMoviesTopRating = () => {
    dispatch(getListTopRatedAction({ language: 'en-US', page: 1 }))
  }

  const onSearch = (e: any) => {
    const value = e.target.value;
    if (value) {
      if (typingSearch.current) {
        clearTimeout(typingSearch.current);
      }

      typingSearch.current = setTimeout(async () => {
        if (value) {
          dispatch<any>(getListSearchAction({ query: value, language: 'en-US', page: 1 }))
        }
      }, 1000);
    }
  };

  return (
    <div className="header">
      <div className="header__wrap">
        <ul>
          <li ><Link to={'/home'}>Home</Link></li>
          <li onClick={onGetListMoviesNowPlaying}>Now playing</li>
          <li onClick={onGetListMoviesTopRating}>Top rated</li>
        </ul>
        <div>
          <input type="text" placeholder="Search" onChange={onSearch} />
        </div>
      </div>
    </div>
  )
}
export default Header