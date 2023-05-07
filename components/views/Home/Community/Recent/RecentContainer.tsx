import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { ArrowRight } from '@svgs/common'
import { flexGap } from '@/styles/emotion'
import { useFetchRecentList } from '@/services/main'
import { Button, Section } from '@/components/common'
import Recent from './Recent'

const RecentContainer = () => {
  const { push } = useRouter()
  const { data: recentList } = useFetchRecentList()

  return (
    <Container>
      <Section.Header
        title="Recent"
        right={
          <Button
            rightIcon={<ArrowRight />}
            onClick={() => push('/article/recent')}
          >
            More
          </Button>
        }
      />
      <Box>
        {recentList.map(recent => {
          return <Recent key={`recent-${recent.id}`} {...recent} />
        })}
      </Box>
    </Container>
  )
}

const Box = styled.ul`
  ${flexGap('1.5rem')}
  width: 100%;
`

const Container = styled.div`
  ${flexGap('32px')}
  width: 100%;
  max-width: 600px;
`

export default RecentContainer
