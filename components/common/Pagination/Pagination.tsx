import styled from '@emotion/styled'
import { ChevronRight } from '@svgs/common'
import { colors, flex, rotate } from '@/styles/emotion'
import { getPages } from './utils'

interface Props {
  count: number
  currentPage: number
  totalPage: number
  onChange: (page: number) => void
}

const Pagination = ({ count, currentPage, totalPage, onChange }: Props) => {
  const pages = getPages({ count, currentPage, totalPage })
  const hasPrev = currentPage > 1
  const hasNext = currentPage < totalPage

  return (
    <Container>
      <ArrowButton
        onClick={() => onChange(currentPage - 1)}
        disabled={!hasPrev}
        css={rotate(180)}
      >
        <ChevronRight
          fill={hasPrev ? colors.primary.black : colors.grey[100]}
        />
      </ArrowButton>
      {pages.map(({ pageNum, isActive }) => {
        return (
          <Button
            key={pageNum}
            onClick={() => onChange(pageNum)}
            isActive={isActive}
          >
            {pageNum}
          </Button>
        )
      })}
      <ArrowButton
        onClick={() => onChange(currentPage + 1)}
        disabled={!hasNext}
      >
        <ChevronRight
          fill={hasNext ? colors.primary.black : colors.grey[100]}
        />
      </ArrowButton>
    </Container>
  )
}

const Button = styled.button<{ isActive: boolean }>`
  color: ${colors.primary.black};
  ${({ isActive = false }) =>
    isActive
      ? `text-decoration: underline;
       text-decoration-thickness: 2px;
       text-underline-offset: 8px;
       text-decoration-color: ${colors.primary.black};
      `
      : 'text-decoration: none;'}
`

const ArrowButton = styled.button`
  width: 20px;
  height: 20px;
`

const Container = styled.div`
  ${flex({ align: 'center' })}
  gap: 28px;
`

export default Pagination
