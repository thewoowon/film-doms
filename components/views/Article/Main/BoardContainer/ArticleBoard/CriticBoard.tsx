import Link from 'next/link'
import { getImageSrcByUuid } from '@/utils'
import styled from '@emotion/styled'
import Critic from '@/components/views/Home/Critic/Critic'

interface Props {
  criticItems: Article.MainContent[]
}

const CriticBoard = ({ criticItems }: Props) => {
  return (
    <CriticsList>
      {criticItems.map(critic => (
        <Link
          key={critic.id}
          className="critic"
          href={`/article/critic/${critic.id}`}
        >
          <Critic
            {...critic}
            createAt={critic.createdAt}
            image={getImageSrcByUuid(critic.author.profileImage.uuidFileName)}
            author={critic.author.nickname}
            description={critic.title}
          />
        </Link>
      ))}
    </CriticsList>
  )
}

export default CriticBoard

const CriticsList = styled.div`
  display: grid;
  gap: 64px 40px;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: repeat(2, 448px);
`
