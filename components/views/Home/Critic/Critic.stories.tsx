import { ComponentMeta, ComponentStory } from '@storybook/react'
import Critic from './Critic'

export default {
  component: Critic,
  title: 'Section/Critic/Item',
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    createAt: {
      control: {
        type: 'date',
      },
    },
  },
} as ComponentMeta<typeof Critic>

const Template: ComponentStory<typeof Critic> = args => <Critic {...args} />

export const Default = Template.bind({})
Default.args = {
  image:
    'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/722098c6-21f9-41da-1fe7-37cd06a3c200/public',
  tag: '영화',
  title: '영화의 제목입니다.',
  createAt: 1682174561168,
  description:
    '콘텐츠 본문 폰트: 프리텐다드 16px (Medium) 이 영역은 최대 75자까지 보입니다.',
  author: '글쓴이',
}
