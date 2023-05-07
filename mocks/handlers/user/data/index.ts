import { getRandomNum } from '@/utils'

const NICKNAME = [
  '작성자',
  '글쓴이',
  '유저',
  '닉네임',
  'helloworld',
  'apple banana apple banana',
  'coke pepsi coke pepsi',
  '한글english혼합hello',
]

export const USER_DATA: Article.Author[] = Array.from(
  { length: 100 },
  (_, i) => ({
    id: i + 1,
    nickname: `${i}${NICKNAME[getRandomNum(0, NICKNAME.length - 1)]}`,
    profileImage: {
      id: i + 1,
      uuidFileName: '7f5fb6d2-40fa-4e3d-81e6-a013af6f4f23.png',
    },
  })
)
