import { Suspense, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors, flex, flexGap, typography } from '@/styles/emotion'
import { CATEGORIES } from '@/constants/article'
import { Tab } from '@/components/common'
import SearchForm from './SearchForm'
import TagList from './TagList'
import BoardContainer from './BoardContainer'

interface Props {
  category: Article.Category
}

const ArticleContainer = ({ category }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Container>
      <Title>{CATEGORIES[category].title}</Title>
      <Suspense fallback={<Loading />}>
        <Tab.Group
          css={TabGroup}
          selected="전체"
          onChange={() => setCurrentPage(1)}
          clearDependency={category}
        >
          <TopBox>
            <Tab.List css={TabList}>
              <TagList category={category} />
            </Tab.List>
            <SearchForm
              pushUrl={({ keyword, option }) =>
                `/search/article/${category}?keyword=${keyword}&option=${option}`
              }
            />
          </TopBox>
          <Tab.Views>
            {({ selected }) => (
              <BoardContainer
                category={category}
                params={{
                  page: currentPage,
                  limit: 22,
                  ...(selected !== '전체' && { tag: selected }),
                }}
                onChangePage={page => setCurrentPage(page)}
              />
            )}
          </Tab.Views>
        </Tab.Group>
      </Suspense>
    </Container>
  )
}

const TabList = css`
  flex: 1;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.grey[100]};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.primary.white};
    border-radius: 3px;
  }
`

const TopBox = styled.div`
  ${flex({ justify: 'space-between' })}
  gap: 16px;
  width: 100%;
`

const TabGroup = css`
  ${flexGap('40px')}
`

const Title = styled.h1`
  ${typography.h5}
  color: ${colors.primary.black};
`

const Container = styled.div`
  ${flexGap('40px')}
  width: 954px;
`

const Loading = styled.div`
  width: 100%;
  height: 1680px;
`

export default ArticleContainer
