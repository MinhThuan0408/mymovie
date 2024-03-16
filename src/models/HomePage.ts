export interface IListMovies {
  
  adult?: boolean,
  backdrop_path?: string,
  id?: number,
  original_language?: string,
  original_title?: string,
  overview?: string,
  popularity?: string,
  poster_path?: string,
  release_date?: string,
  title?: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number,
  page?: number,
  language?: string,
  query?: string,
  movie_id?: number,
}
export interface IDetailMovies {
  movie_id?: number
  adult?: boolean
  language?: string
  backdrop_path?: string
  belongs_to_collection ?: string
  budget?: number
  genres?: Genres[]
  homepage?: string
  id?: number
  imdb_id?: string
  original_language?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  production_companies?: ProductionCompanies[]
  production_countries?: IProductionCountries[]
  release_date?: string
  revenue?: number
  runtime?: number
  spoken_languages?: ISpokenLanguages[]
  status?: string
  tagline?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number

}

export interface Genres{
  id?: number,
  name?: string
}
export interface ProductionCompanies{
  id?: number,
  logo_path?: string
  name?: string
  origin_country?: string
}
export interface IProductionCountries{
  iso_3166_1?: string
  name?: string
}
export interface ISpokenLanguages{
  english_name?: string
  iso_639_1?: string
  name?: string
}

