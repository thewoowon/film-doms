import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { getMockImage } from '@/utils'
import FilmUniverse from './FilmUniverse'
import styled from '@emotion/styled'

export default {
  component: FilmUniverse,
  title: 'Section/FilmUniverse/Item',
  argTypes: {
    startAt: {
      control: {
        type: 'date',
      },
    },
    endAt: {
      control: {
        type: 'date',
      },
    },
  },
} as ComponentMeta<typeof FilmUniverse>

export const Default: ComponentStory<typeof FilmUniverse> = args => (
  <FilmUniverseWrapper>
    <FilmUniverse {...args} />
  </FilmUniverseWrapper>
)

Default.args = {
  title: '공지사항 제목입니다.',
  owner: '관리자',
  classification: '연합본부',
  image: getMockImage('notice1', { width: 360, height: 400 }),
  startAt: '2021-04-06',
  endAt: '2023-04-06',
}

const FilmUniverseWrapper = styled.div`
  width: 360px;
  height: 400px;
`
