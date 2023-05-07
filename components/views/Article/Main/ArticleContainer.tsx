import { Suspense, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors, flex, flexGap, typography } from '@/styles/emotion'
import { CATEGORIES } from '@/constants/article'
import { RenderIf, Tab } from '@/components/common'
import SearchForm from './SearchForm'
import TagList from './TagList'
import BoardContainer from './BoardContainer'
import { useRouter } from 'next/router'

const ArticleContainer = () => {
  const router = useRouter()
  const category = String(router.query.category)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Container category={category}>
      <Title>{CATEGORIES[category].title}</Title>
      <Tab.Group
        css={TabGroup}
        selected="전체"
        onChange={() => setCurrentPage(1)}
        clearDependency={category}
      >
        <TopBox>
          <Tab.List css={TabList}>
            <Suspense fallback={<TagListLoading />}>
              <TagList category={category} />
            </Suspense>
          </Tab.List>
          <SearchForm
            pushUrl={({ keyword, option }) =>
              `/search/article/${category}?keyword=${keyword}&option=${option}`
            }
          />
        </TopBox>
        <Tab.Views>
          {({ selected }) => (
            <Suspense fallback={<BoardLoading />}>
              <BoardContainer
                category={category}
                params={{
                  page: currentPage,
                  size: 22,
                  ...(selected !== '전체' && { tag: selected }),
                }}
                onChangePage={page => setCurrentPage(page)}
              />
            </Suspense>
          )}
        </Tab.Views>
      </Tab.Group>
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

const Container = styled.div<{ category: string }>`
  ${flexGap('40px')}
  width: 954px;
`

const BoardLoading = styled.div`
  width: 100%;
  height: 1606px;
`

const TagListLoading = styled.div`
  flex: 1;
  height: 34px;
`

export default ArticleContainer
