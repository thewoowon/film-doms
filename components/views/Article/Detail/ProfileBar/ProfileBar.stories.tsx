import { type ComponentMeta } from '@storybook/react'
import ProfileBar from './ProfileBar'

export default {
  component: ProfileBar,
  title: 'Article/Detail/Comment/ProfileBar',
} as ComponentMeta<typeof ProfileBar>

const article: Article.BaseDetailContent = {
  id: 1,
  tag: 'OTT',
  title: 'title',
  content: 'content',
  createdAt: 1682065256623,
  updatedAt: 1682065256623,
  author: {
    id: 2,
    nickname: '정우성',
    profileImage: {
      id: 5,
      uuidFileName: '7f5fb6d2-40fa-4e3d-81e6-a013af6f4f23.png',
    },
  },
  views: 10000,
  likes: 100,
  category: 'movie',
  status: 'ACTIVE',
  liked: false,
}

export const Default = () => <ProfileBar article={article} count={2} />
