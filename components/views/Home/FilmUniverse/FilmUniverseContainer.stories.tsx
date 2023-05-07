import { type ComponentMeta } from '@storybook/react'
import FilmUniverseContainer from './FilmUniverseContainer'

export default {
  component: FilmUniverseContainer,
  title: 'Section/FilmUniverse',
} as ComponentMeta<typeof FilmUniverseContainer>

export const Default = () => <FilmUniverseContainer />
