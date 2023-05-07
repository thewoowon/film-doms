import { ComponentMeta, ComponentStory } from '@storybook/react'
import type { Meta, StoryObj } from '@storybook/react'
import { getMockImage } from '@/utils'
import SliderWrapper from './SliderWrapper'
import styled from '@emotion/styled'

const meta: Meta<typeof SliderWrapper> = {
  title: 'Section/Banner/Slider',
  component: SliderWrapper,
}

export default meta
type Story = StoryObj<typeof SliderWrapper>

const SIZE = {
  width: 1280,
  height: 440,
}

export const Default: Story = {
  args: {
    banners: Array.from({ length: 5 })
      .fill(0)
      .map((_, index) => ({
        id: index,
        type: `이것은 movie타입입니다.`,
        image: getMockImage(`picture${index}`, SIZE),
        title: `이것은 사진${index + 1}입니다.`,
        subtitle: `이것은 사진${index + 1}의 설명입니다.`,
      })),
  },
  decorators: [Story => <Story />],
}
