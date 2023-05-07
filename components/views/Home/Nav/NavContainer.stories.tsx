import { type ComponentMeta } from '@storybook/react'
import NavContainer from './NavContainer'

export default {
  component: NavContainer,
  title: 'Section/Nav',
} as ComponentMeta<typeof NavContainer>

export const Default = () => <NavContainer />
