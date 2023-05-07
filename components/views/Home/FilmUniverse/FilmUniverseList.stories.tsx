import { type ComponentMeta } from '@storybook/react'
import FilmUniverseList from './FilmUniverseList'

export default {
  component: FilmUniverseList,
  title: 'Section/FilmUniverse/List',
} as ComponentMeta<typeof FilmUniverseList>

export const Default = () => <FilmUniverseList />
