import { ComponentMeta, ComponentStory } from '@storybook/react'
import Recent from './Recent'

export default {
  component: Recent,
  title: 'Section/Community/Recent/Item',
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    category: {
      control: {
        type: 'radio',
        options: ['영화', '이벤트', 'OTT 시리즈'],
      },
    },
  },
} as ComponentMeta<typeof Recent>

const Template: ComponentStory<typeof Recent> = args => <Recent {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 1,
  title: '이것은 Recent Title 입니다',
  category: '영화',
  commentCount: 5,
}
