
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ApiConstants } from '../../constants/apiConstants';
import { IDetailMovies, IListMovies } from '../../models/HomePage';
import { ListResponse, Meta, SingleResponse, State } from '../../models/common';
import { getDetailMovie, getListMoviesNowPlaying, getListMoviesSearch, getListMoviesTopRated } from '../../services/HomePage';
import { notificationHelper } from '../../utils/notificationHelper';

interface HomePageStateI {
  listMoviesState: State<IListMovies>; // danh sách
  detailMoviesState: State<IDetailMovies>; // detail
}

const initialState: HomePageStateI = {
  listMoviesState: {
    list: [],
    requesting: false,
    success: false,
  },
  detailMoviesState: {
    single: {},
    requesting: false,
    success: false,
  },
};

//Action test

export const getListNowPlayingAction = createAsyncThunk(
  ApiConstants.HomePages.getListNowPlaying,
  async (params?: IListMovies) => {
    const response = await getListMoviesNowPlaying(params!);
    return response;
  }
);
export const getListTopRatedAction = createAsyncThunk(
  ApiConstants.HomePages.getListTopRated,
  async (params?: IListMovies) => {
    const response = await getListMoviesTopRated(params!);
    return response;
  }
);
export const getListSearchAction = createAsyncThunk(
  ApiConstants.HomePages.getListSearch,
  async (params?: IListMovies) => {
    const response = await getListMoviesSearch(params!);
    return response;
  }
);

export const getDetailMovieAction = createAsyncThunk(
  ApiConstants.Detail.getDetailMovie,
  async (params?: IDetailMovies) => {
    const response = await getDetailMovie(params!);
    return response;
  }
);

//Reducer
const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //danh sách now
      .addCase(getListNowPlayingAction.pending, (state) => {
        state.listMoviesState.requesting = true;
      })
      .addCase(
        getListNowPlayingAction.fulfilled,
        (
          state,
          action: PayloadAction<ListResponse<IListMovies>, string, Meta<IListMovies>>
        ) => {
          state.listMoviesState.requesting = false;
          state.listMoviesState.list = action.payload.results
        }
      )
      .addCase(getListNowPlayingAction.rejected, (state) => {
        state.listMoviesState.requesting = false;
        notificationHelper.error({ description: 'Error' });
      })
      //danh sách top
      .addCase(getListTopRatedAction.pending, (state) => {
        state.listMoviesState.requesting = true;
      })
      .addCase(
        getListTopRatedAction.fulfilled,
        (
          state,
          action: PayloadAction<ListResponse<IListMovies>, string, Meta<IListMovies>>
        ) => {
          state.listMoviesState.requesting = false;
          state.listMoviesState.list = action.payload.results
        }
      )
      .addCase(getListTopRatedAction.rejected, (state) => {
        state.listMoviesState.requesting = false;
        notificationHelper.error({ description: 'Error' });
      })
      //danh sách search
      .addCase(getListSearchAction.pending, (state) => {
        state.listMoviesState.requesting = true;
      })
      .addCase(
        getListSearchAction.fulfilled,
        (
          state,
          action: PayloadAction<ListResponse<IListMovies>, string, Meta<IListMovies>>
        ) => {
          state.listMoviesState.requesting = false;
          state.listMoviesState.list = action.payload.results
        }
      )
      .addCase(getListSearchAction.rejected, (state) => {
        state.listMoviesState.requesting = false;
        notificationHelper.error({ description: 'Error' });
      })
      //detail
      .addCase(getDetailMovieAction.pending, (state) => {
        state.detailMoviesState.requesting = true;
      })
      .addCase(
        getDetailMovieAction.fulfilled,
        (state, action: PayloadAction<SingleResponse<IDetailMovies>>) => {
          state.detailMoviesState.requesting = false;
          state.detailMoviesState.single = action.payload.results;
        }
      )
      .addCase(getDetailMovieAction.rejected, (state) => {
  
        state.listMoviesState.requesting = false;
        notificationHelper.error({ description: 'Error nè' });
      })
  },
});

// Action
export const homePageActions = homePageSlice.actions;

// state
export const homePageSelector = (state: RootState) => state.homePage;

export default homePageSlice.reducer;
