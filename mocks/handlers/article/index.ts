import { rest } from 'msw'
import { NOTICE_DATA } from './data/notice'

export const getArticles = rest.get(
  '/api/article/:category',
  (req, res, ctx) => {
    const { category } = req.params

    switch (category) {
      case 'notice':
        return res(ctx.status(200), ctx.json<Article.Notice[]>(NOTICE_DATA))
      default:
        return res(ctx.status(404))
    }
  }
)

export const getArticle = rest.get(
  '/api/article/:category/:id',
  (req, res, ctx) => {
    const { category, id } = req.params

    switch (category) {
      case 'notice':
        return res(
          ctx.status(200),
          ctx.json<Article.Notice | undefined>(
            NOTICE_DATA.find(item => item.id === Number(id))
          )
        )
      default:
        return res(ctx.status(404))
    }
  }
)
