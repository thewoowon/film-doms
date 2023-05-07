import { useSuspendedQuery } from '@/hooks'
import queryKeys from '../queryKeys'
import {
  getUserActivityArticle,
  getUserActivityComment,
  getUserInfo,
} from './apis'

export const useFetchUserInfo = () => {
  return useSuspendedQuery(queryKeys.myPage.userInfo, getUserInfo)
}

export const useFetchUserActivityArticle = (params: User.Activity.Params) => {
  return useSuspendedQuery(queryKeys.myPage.activityArticle(params), () =>
    getUserActivityArticle(params)
  )
}

export const useFetchUserActivityComment = (params: User.Activity.Params) => {
  return useSuspendedQuery(queryKeys.myPage.activityComment(params), () =>
    getUserActivityComment(params)
  )
}
