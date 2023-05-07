import { createParams, getRandomNum } from '@/utils'
import api, { mswApi } from '../api'

export const getArticleTagListByCategory = async (category: string) => {
  const { result } = await api.get<null, Article.TagDTO>(
    `/api/v1/${category}/tag`
  )

  return result
}

export const getArticleMainContentByCategory = async (
  category: string,
  params: Article.MainContentParams
) => {
  const { result } = await api.get<null, Article.MainContentDTO>(
    `/api/v1/article/${category}?${createParams(params)}`
  )

  return result
}

export const getArticleDetailContentByCategoryById = async (
  category: string,
  id: number
) => {
  const { result } = await api.get<null, Article.BaseDetailContentDTO>(
    `/api/v1/article/${category}/${id}`
  )

  return result
}

export const getArticleNoticeList = async () => {
  const data = await mswApi.get<null, Article.Notice[]>(`/api/article/notice`)

  return data
}

export const getArticleCommentListByCategoryById = async (
  category: string,
  id: number
) => {
  const { result } = await api.get<null, Article.CommentDTO>(
    `/api/v1/article/${category}/${id}/comment`
  )

  return result
}

export const getPopularArticleList = async () => {
  const { result } = await api.get<null, Article.PopularDTO>(
    `/api/v1/article/top-posts`
  )

  return result
}
