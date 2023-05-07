import { flexCenter } from '@/styles/emotion'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Tag, TicketButton } from '@/components/common'

const FilmUniverse = ({
  title,
  owner,
  classification,
  image,
  startAt,
  endAt,
}: {
  title: string
  owner: string
  classification: string
  image: string
  startAt: string
  endAt: string
}) => {
  return (
    <FilmUniverseElement>
      <Image width={360} height={400} src={image} alt="title" />
      <FilmUniverseElementOwnerWrapper>
        <FilmUniverseElementOwner>{owner}</FilmUniverseElementOwner>
        <Tag shape="round">{classification}</Tag>
      </FilmUniverseElementOwnerWrapper>
      <FilmUniverseElementTitle>
        {title.length <= 50 ? title : title.substring(0, 50) + '...'}
      </FilmUniverseElementTitle>
      <FilmUniverseElementDateWrapper>
        <FilmUniverseElementDate>{`${startAt} ~ ${endAt.substring(
          5
        )}`}</FilmUniverseElementDate>
        <TicketButton>{'자세히 보기'}</TicketButton>
      </FilmUniverseElementDateWrapper>
    </FilmUniverseElement>
  )
}

export default FilmUniverse

const FilmUniverseElement = styled.div`
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

const FilmUniverseElementOwnerWrapper = styled.div`
  ${flexCenter}
  justify-content: flex-start;
  width: 100%;
  padding-top: 20px;
  gap: 16px;
`

const FilmUniverseElementDateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`

const FilmUniverseElementOwner = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #ff5414;
`

const FilmUniverseElementTitle = styled.div`
  height: 64px;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  color: #111111;
  margin-top: 17px;
  margin-bottom: 28px;
`
const FilmUniverseElementDate = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #aaaaaa;
`
