import { useFetchCriticList } from '@/services/main'
import styled from '@emotion/styled'
import Link from 'next/link'
import Critic from './Critic'
import { getImageSrcByUuid } from '@/utils'

const CriticList = () => {
  const { data: criticList } = useFetchCriticList()

  return (
    <CriticsList>
      {criticList.map(critic => (
        <Link
          key={critic.id}
          className="critic"
          href={`/article/critic/${critic.id}`}
        >
          <Critic
            {...critic}
            createAt={critic.createdAt}
            image={getImageSrcByUuid(critic.mainImage.uuidFileName)}
            author={critic.author.nickname}
          />
        </Link>
      ))}
    </CriticsList>
  )
}

export default CriticList

const CriticsList = styled.div`
  display: grid;
  gap: 64px 40px;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(2, 448px);
`
