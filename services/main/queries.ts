import { useSuspendedQuery } from '@/hooks'
import queryKeys from '../queryKeys'
import {
  getBannerList,
  getCriticList,
  getFilmUniverseList,
  getMovieList,
  getRecentList,
} from './apis'

export const useFetchBannerList = () => {
  return useSuspendedQuery(queryKeys.main.bannerDTO, getBannerList)
}

export const useFetchRecentList = () => {
  return useSuspendedQuery(queryKeys.main.recentDTO, getRecentList)
}

export const useFetchMovieList = () => {
  return useSuspendedQuery(queryKeys.main.movieDTO, getMovieList)
}

export const useFetchFilmUniverseList = () => {
  return useSuspendedQuery(queryKeys.main.filmUniverseDTO, getFilmUniverseList)
}

export const useFetchCriticList = () => {
  return useSuspendedQuery(queryKeys.main.criticDTO, getCriticList)
}
