import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { ArrowRight } from '@svgs/common'
import { flexGap } from '@/styles/emotion'
import { useFetchMovieList } from '@/services/main'
import { Button, Section } from '@/components/common'
import Movie from './Movie'

const MovieContainer = () => {
  const { push } = useRouter()
  const { data: MovieList } = useFetchMovieList()

  return (
    <Container>
      <Section.Header
        title="Movie"
        right={
          <Button
            rightIcon={<ArrowRight />}
            onClick={() => push('/article/movie')}
          >
            More
          </Button>
        }
      />
      <Box>
        {MovieList.map(movie => {
          return <Movie key={`Movie-${movie.id}`} {...movie} />
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

export default MovieContainer
