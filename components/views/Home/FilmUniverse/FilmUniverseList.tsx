import { useScrollFadeIn } from '@/hooks'
import { useFetchFilmUniverseList } from '@/services/main'
import styled from '@emotion/styled'
import Link from 'next/link'
import FilmUniverse from './FilmUniverse'
import { getImageSrcByUuid } from '@/utils'

const FilmUniverseList = () => {
  const { data: filmUniverseList } = useFetchFilmUniverseList()
  const scrollFadeIn = useScrollFadeIn(0.2, '20%')

  return (
    <FilmUniverseAlign {...scrollFadeIn}>
      {filmUniverseList.map((filmUniverse: Main.FilmUniverse) => (
        <Link
          className="flex items-center justify-center"
          key={filmUniverse.id}
          href={`/article/filmUniverse/${filmUniverse.id}`}
        >
          <FilmUniverse
            {...filmUniverse}
            owner={filmUniverse.author.nickname}
            classification={filmUniverse.tag}
            image={getImageSrcByUuid(filmUniverse.mainImage.uuidFileName)}
          />
        </Link>
      ))}
    </FilmUniverseAlign>
  )
}
export default FilmUniverseList

const FilmUniverseAlign = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;
`
