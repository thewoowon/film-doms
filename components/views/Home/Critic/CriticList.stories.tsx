import { type ComponentMeta } from '@storybook/react'
import CriticList from './CriticList'

export default {
  component: CriticList,
  title: 'Section/Critic/List',
} as ComponentMeta<typeof CriticList>

export const Default = () => <CriticList />
