import { Suspense } from 'react'
import styled from '@emotion/styled'
import { flex } from '@/styles/emotion'
import { Loading } from '@/components/common'
import MovieContainer from './Movie'
import RecentContainer from './Recent'

const CommunityContainer = () => {
  return (
    <Section>
      <Suspense fallback={<Loading width="1280px" height="392px" />}>
        <RecentContainer />
        <MovieContainer />
      </Suspense>
    </Section>
  )
}

const Section = styled.div`
  ${flex({ justify: 'space-between' })}
  width: 100%;
  max-width: 1280px;
`

export default CommunityContainer
