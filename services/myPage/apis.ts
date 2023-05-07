import { createParams } from '@/utils'
import { mswApi } from '../api'

export const getUserInfo = async () => {
  const { result } = await mswApi.get<null, User.InfoDTO>(
    `/api/v1/account/profile`
  )

  return result
}

export const getUserActivityArticle = async (params: User.Activity.Params) => {
  const { result } = await mswApi.get<null, User.Activity.ArticleDTO>(
    `/api/v1/account/activity/article?${createParams(params)}`
  )

  return result
}

export const getUserActivityComment = async (params: User.Activity.Params) => {
  const { result } = await mswApi.get<null, User.Activity.CommentDTO>(
    `/api/v1/account/activity/comment?${createParams(params)}`
  )

  return result
}
