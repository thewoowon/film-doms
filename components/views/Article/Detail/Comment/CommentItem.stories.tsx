import { type ComponentMeta } from '@storybook/react'
import CommentItem from './CommentItem'

export default {
  component: CommentItem,
  title: 'Article/Detail/Comment/CommentItem',
} as ComponentMeta<typeof CommentItem>

const commentItem: Article.Comment = {
  id: 1,
  content: '제가 이번에 관상 2번을 봤는데요. 정말 재밌었어요.',
  status: 'ACTIVE',
  likes: 10,
  createdAt: 1682056868343,
  updatedAt: 1682056868343,
  author: {
    id: 2,
    nickname: '이정재',
    profileImage: {
      id: 5,
      uuidFileName: '7f5fb6d2-40fa-4e3d-81e6-a013af6f4f23.png',
    },
  },
  childComments: [
    {
      id: 3,
      content: '정말 재미있는 영화였어요 ㅎㅎ 😆',
      status: 'ACTIVE',
      likes: 10,
      createdAt: 1682056868343,
      updatedAt: 1682056868343,
      author: {
        id: 4,
        nickname: '정우성',
        profileImage: {
          id: 5,
          uuidFileName: '7f5fb6d2-40fa-4e3d-81e6-a013af6f4f23.png',
        },
      },
      managerComment: false,
    },
  ],
  managerComment: false,
}

export const Default = () => (
  <CommentItem comment={commentItem} borderBottom={false} />
)
