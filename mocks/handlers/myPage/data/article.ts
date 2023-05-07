import { getRandomNum } from '@/utils'
import { TAG_DATA } from '../../tag/data'

const TITLE = [
  '대외활동 모집 공고',
  '대외활동 모집 공고'.repeat(10),
  '대외활동 모집 공고'.repeat(30),
]

export const activityArticleList: User.Activity.Article[] = Array.from(
  { length: 78 },
  (_, idx) => ({
    id: idx + 1,
    tag: TAG_DATA.movie[getRandomNum(0, TAG_DATA.movie.length - 1)],
    title: TITLE[getRandomNum(0, TITLE.length - 1)],
    commentCount: getRandomNum(0, 200),
    createdAt: '2023.01.01',
    views: getRandomNum(0, 1000),
    likes: getRandomNum(0, 1000),
    containImage: getRandomNum(0, 1) === 1,
  })
)
