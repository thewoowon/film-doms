import { rest } from 'msw'
import { userInfo } from './data'
import { activityArticleList } from './data/article'
import { activityCommentList } from './data/comment'

export const getUserInfo = rest.get(
  '/api/v1/account/profile',
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<User.InfoDTO>({
        resultCode: 'SUCCESS',
        result: userInfo,
      })
    )
  }
)

export const getUserActivityArticle = rest.get(
  '/api/v1/account/activity/article',
  (req, res, ctx) => {
    const page = req.url.searchParams.get('page') ?? 0
    const size = req.url.searchParams.get('size') ?? 10

    return res(
      ctx.status(200),
      ctx.json<User.Activity.ArticleDTO>({
        resultCode: 'SUCCESS',
        result: createPagination(activityArticleList, {
          page: +page,
          size: +size,
        }),
      })
    )
  }
)

export const getUserActivityComment = rest.get(
  '/api/v1/account/activity/comment',
  (req, res, ctx) => {
    const page = req.url.searchParams.get('page') ?? 0
    const size = req.url.searchParams.get('size') ?? 10

    return res(
      ctx.status(200),
      ctx.json<User.Activity.CommentDTO>({
        resultCode: 'SUCCESS',
        result: createPagination(activityCommentList, {
          page: +page,
          size: +size,
        }),
      })
    )
  }
)

const createPagination = <T>(
  data: T[],
  params: Required<User.Activity.Params>
) => {
  const { page, size } = params
  const clone = structuredClone(data)
  const start = page * size
  const end = start + size

  return {
    content: clone.slice(start, end),
    totalElements: clone.length,
    totalPages: Math.ceil(clone.length / size),
    size,
  }
}
