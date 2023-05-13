import styled from '@emotion/styled'
import { colors, flexGap, font } from '@/styles/emotion'
import { Divider, Tag } from '@/components/common'
import { MAX_INTEREST_MOVIE_COUNT } from '../constants'

interface Props {
  interestMovieList: User.InterestMovie[]
}

const InterestMovieSection = ({ interestMovieList }: Props) => {
  const sliceInterestMovieList = interestMovieList.slice(
    0,
    MAX_INTEREST_MOVIE_COUNT
  )

  return (
    <Container>
      <Divider color={colors.primary.orange} size={4} limit="24px" />
      <Title>관심영화</Title>
      <Wrapper>
        <Box>
          {sliceInterestMovieList.map((movie, idx) => {
            return (
              <Tag key={`interestMovie-${idx}`} shape="round">
                {movie}
              </Tag>
            )
          })}
        </Box>
      </Wrapper>
    </Container>
  )
}

const Box = styled.div`
  ${flexGap('8px', 'row')}
  width: max-content;
`

const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`

const Title = styled.h1`
  ${font({ size: '20px', weight: '700', lineHeight: '24px' })}
  color: ${colors.grey[900]};
`

const Container = styled.div`
  ${flexGap('20px')}
  width: 100%;
`

export default InterestMovieSection
