import { ArticleLayout } from '@/components/views/Layout'
import styled from '@emotion/styled'
import { ArticleDetailViews, ArticleMainViews } from '@views/Article'
import { useRouter } from 'next/router'
import { hasOwnProperty } from '@/utils'
import { CATEGORIES } from '@/constants/article'
import { OpenGraph } from '@/components/common'
import { flexGap } from '@/styles/emotion'
import ArticlePopularContainer from '@/components/views/Article/Popular/ArticlePopularContainer'

const ArticleDetailPage = () => {
  const { query } = useRouter()
  const category = query.category as string
  const id = Number(query.id)
  const isValidCategory = hasOwnProperty(CATEGORIES, category)

  if (!isValidCategory) {
    // TODO: 유효하지 않은 카테고리 처리 필요
    return null
  }

  return (
    <OpenGraph title={'Article'} path={`/article/${category}/${id}`}>
      <ArticleLayout right={<ArticlePopularContainer />} width={'1280px'}>
        <ColumnGrid>
          <ArticleDetailViews articleId={id} category={category} />
          <ArticleMainViews />
        </ColumnGrid>
      </ArticleLayout>
    </OpenGraph>
  )
}

export default ArticleDetailPage

const ColumnGrid = styled.div`
  ${flexGap('40px')}
`
