import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import Movie from './Movie'

export default {
  component: Movie,
  title: 'Section/Community/Movie/Item',
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
} as ComponentMeta<typeof Movie>

const Template: ComponentStory<typeof Movie> = args => <Movie {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 1,
  title: '이것은 Movie Title 입니다',
  category: '영화',
  commentCount: 5,
}
