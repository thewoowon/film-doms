import { getRandomNum } from '@/utils'
import { USER_DATA } from '../../user/data'
import { TAG_DATA } from '../../tag/data'

const TAG = TAG_DATA.filmUniverse

const TITLE = [
  '안녕하세요',
  '공모전 정보 모음',
  '2023 대외활동 모집 공고',
  '2023 대외활동 모집 공고'.repeat(5),
  '공모전 정보 모음'.repeat(5),
  '안녕하세요'.repeat(10),
]

export const FILM_UNIVERSE_DATA: Article.MainContent[] = Array.from(
  { length: 200 },
  (_, i) => ({
    id: i + 1,
    category: 'FILM_UNIVERSE',
    tag: TAG[getRandomNum(0, TAG.length - 1)],
    title: TITLE[getRandomNum(0, TITLE.length - 1)],
    author: USER_DATA[getRandomNum(0, USER_DATA.length - 1)],
    createdAt: 1682065256993,
    updatedAt: 1682065256993,
    views: getRandomNum(0, 10000),
    likes: getRandomNum(0, 1500),
    commentCount: getRandomNum(0, 150),
    containImage: getRandomNum(0, 1) === 1,
  })
)
