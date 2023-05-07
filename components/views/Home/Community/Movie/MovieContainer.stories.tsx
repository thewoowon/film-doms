import { type ComponentMeta } from '@storybook/react'
import MovieContainer from './MovieContainer'

export default {
  component: MovieContainer,
  title: 'Section/Community/Movie/List',
} as ComponentMeta<typeof MovieContainer>

export const Default = () => <MovieContainer />
