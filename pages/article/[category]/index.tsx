import { ArticleLayout } from '@views/Layout'
import { hasOwnProperty } from '@/utils'
import { OpenGraph } from '@/components/common'
import { CATEGORIES } from '@/constants/article'
import ArticlePopularContainer from '@/components/views/Article/Popular/ArticlePopularContainer'
import dynamic from 'next/dynamic'
import { GetStaticPaths, GetStaticProps } from 'next'

type CategoryProps = {
  category: string
}

const ArticlePage = ({ category }: CategoryProps) => {
  const components: {
    [key: string]: any
  } = {
    movie: dynamic(() => import('@views/Article/Main/ArticleContainer')),
    filmUniverse: dynamic(() => import('@views/Article/Main/ArticleContainer')),
    critic: dynamic(() => import('@views/Article/Main/CriticContainer')),
  }
  const Component = components[category]

  const isValidCategory = hasOwnProperty(CATEGORIES, category)

  if (!isValidCategory) {
    // TODO: 유효하지 않은 카테고리 처리 필요
    return null
  }

  return (
    <OpenGraph title={CATEGORIES[category].title} path={`/article/${category}`}>
      <ArticleLayout
        width={category !== 'critic' ? '1280px' : '100%'}
        right={category !== 'critic' ? <ArticlePopularContainer /> : null}
      >
        <Component />
      </ArticleLayout>
    </OpenGraph>
  )
}

export default ArticlePage

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { category: 'movie' } },
      { params: { category: 'filmUniverse' } },
      { params: { category: 'critic' } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      category: params && params.category,
    },
  }
}
