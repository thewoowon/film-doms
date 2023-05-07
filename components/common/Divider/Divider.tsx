import { type HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { colors } from '@/styles/emotion'

interface Props extends HTMLAttributes<HTMLHRElement> {
  /**
   * @description 수평, 수직을 지정합니다.
   *
   * @default horizontal
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * @description 색상을 지정합니다.
   *
   * @default colors.primary.black
   */
  color?: string
  /**
   * @description px단위입니다.
   *
   * @default 2
   */
  size?: number
  /**
   * @description 길이 제한을 지정합니다.
   *
   * @default 100%
   */
  limit?: string
}

const Divider = ({
  orientation = 'horizontal',
  color = colors.primary.black,
  size = 2,
  limit = '100%',
}: Props) => {
  return (
    <Hr orientation={orientation} color={color} size={size} limit={limit} />
  )
}

const Hr = styled.hr<Pick<Props, 'orientation' | 'color' | 'size' | 'limit'>>`
  ${({ orientation, size, limit }) =>
    orientation === 'horizontal'
      ? `width: ${limit};
         height: ${size}px;`
      : `width: ${size}px;
         height: ${limit};`};
  border-color: ${({ color }) => color};
`

export default Divider
