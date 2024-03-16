import { ApiConstants } from '../constants/apiConstants';
import { IDetailMovies, IListMovies } from '../models/HomePage';
import request from '../utils/request';

export const getListMoviesNowPlaying = (params: IListMovies): Promise<any> => {
  return request({
    url: ApiConstants.HomePages.getListNowPlaying,
    method: 'GET',
    params,
  });
};
export const getListMoviesTopRated = (params: IListMovies): Promise<any> => {
  return request({
    url: ApiConstants.HomePages.getListTopRated,
    method: 'GET',
    params,
  });
};
export const getListMoviesSearch = (params: IListMovies): Promise<any> => {
  return request({
    url: ApiConstants.HomePages.getListSearch,
    method: 'GET',
    params,
  });
};
export const getDetailMovie = (params: IDetailMovies): Promise<any> => {
  return request({
    url: ApiConstants.Detail.getDetailMovie+params.movie_id,
    method: 'GET',
    params,
  });
};
