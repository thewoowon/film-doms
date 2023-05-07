import { ChevronLeft } from '@/assets/svgs/common'
import { Loading } from '@/components/common'
import { CATEGORIES } from '@/constants/article'
import { colors, flexCenter, flexGap, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Suspense } from 'react'
import { ArticleDetail } from './ArticleDetail'
import { CommentContainerView } from './Comment'
import { camelToSnake } from '@/utils'

export type ArticleDetailContainerProps = {
  articleId: number
  category: string
}

const ArticleDetailContainer = ({
  articleId,
  category,
}: ArticleDetailContainerProps) => {
  const snakeCategory = camelToSnake(category)

  return (
    <Container>
      <Title>
        <ChevronWrapper>
          <Link href={`/article/${category}`}>
            <ChevronLeft width="10px" height="16px" />
          </Link>
        </ChevronWrapper>
        {CATEGORIES[category].title}
      </Title>
      <ArticleSection>
        <Suspense fallback={<Loading />}>
          <ArticleDetail articleId={articleId} category={snakeCategory} />
        </Suspense>
      </ArticleSection>
      <CommentSection>
        <Suspense fallback={<Loading />}>
          <CommentContainerView
            articleId={articleId}
            category={snakeCategory}
          />
        </Suspense>
      </CommentSection>
    </Container>
  )
}

export default ArticleDetailContainer

const Container = styled.div`
  ${flexGap('40px')}
  width: 954px;
  align-items: flex-end;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 954px;
  ${typography.h5}
  color: ${colors.primary.black};
`

const ArticleSection = styled.section`
  ${flexGap('40px')}
  width: 914px;
`

const CommentSection = styled.section`
  ${flexGap('40px')}
  width: 914px;
`

const ChevronWrapper = styled.div`
  ${flexCenter}
  padding: 0 19px 0 9px;
  cursor: pointer;
`
