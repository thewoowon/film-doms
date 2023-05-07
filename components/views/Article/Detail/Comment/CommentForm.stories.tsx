import { flexGap } from '@/styles/emotion'
import styled from '@emotion/styled'
import { type ComponentMeta } from '@storybook/react'
import CommentForm from './CommentForm'

export default {
  component: CommentForm,
  title: 'Article/Detail/Comment/CommentForm',
  decorators: [
    Story => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} as ComponentMeta<typeof CommentForm>

export const Default = () => <CommentForm />

const Container = styled.div`
  ${flexGap('20px')}
  width: 914px;
`
