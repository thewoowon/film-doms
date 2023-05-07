import api, { mswApi } from '../api'

export const getBannerList = () => {
  return mswApi.get<null, Main.Banner[]>('/api/banner')
}

export const getRecentList = async () => {
  const { result } = await api.get<null, Main.RecentDTO>('/api/v1/main/recent')

  return result
}

export const getMovieList = async () => {
  const { result } = await api.get<null, Main.MovieDTO>('/api/v1/main/movie')

  return result
}

export const getFilmUniverseList = async () => {
  const { result } = await api.get<null, Main.FilmUniverseDTO>(
    '/api/v1/main/film_universe?limit=3'
  )

  return result
}

export const getCriticList = async () => {
  const { result } = await api.get<null, Main.CriticDTO>('/api/v1/main/critic')

  return result
}
