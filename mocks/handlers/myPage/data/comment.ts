import { getRandomNum } from '@/utils'

const CONTENT = [
  '감사합니다~',
  '넵!',
  '넵! 감사합니다~, 좋은 하루 보내세요~',
  '넵! 감사합니다~, 좋은 하루 보내세요~'.repeat(10),
  '넵! 감사합니다~, 좋은 하루 보내세요~'.repeat(30),
]

export const activityCommentList: User.Activity.Comment[] = Array.from(
  { length: 123 },
  (_, idx) => ({
    id: idx + 1,
    content: CONTENT[getRandomNum(0, CONTENT.length - 1)],
    childrenCommentCount: getRandomNum(0, 200),
    createdAt: '2023.01.01',
  })
)
