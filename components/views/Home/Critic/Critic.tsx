import { Tag } from '@/components/common'
import { colors, typography } from '@/styles/emotion'
import { cutString } from '@/utils'
import styled from '@emotion/styled'
import Image from 'next/image'

const Critic = ({
  image,
  author,
  tag,
  title,
  description,
  createAt,
}: {
  image: string
  author: string
  tag: string
  title: string
  description: string
  createAt: number
}) => {
  return (
    <CriticBox>
      <ContentImage>
        <Image
          src={image}
          alt={'post image'}
          fill
          sizes="(max-width: 1024px) 100vw,
            (min-width: 768px) 50vw,
              33vw"
        />
      </ContentImage>
      <ContentBody>
        <ContentBodyHeader>
          <Author>{author}</Author>
          <Tag shape="round" color={tag === 'Editor' ? 'orange' : 'default'}>
            {tag}
          </Tag>
        </ContentBodyHeader>
        <Title>{cutString(title, 28)}</Title>
        <Description>{cutString(description, 70)}</Description>
        <Time>
          {new Intl.DateTimeFormat('ko').format(createAt).slice(0, -1)}
        </Time>
      </ContentBody>
    </CriticBox>
  )
}

export default Critic

const CriticBox = styled.article`
  height: 100%;
  width: 400px;
`

const ContentImage = styled.div`
  position: relative;
  object-fit: cover;
  width: 400px;
  height: 240px;
`
const ContentBody = styled.div`
  padding: 16px 4px 0;
  height: 208px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContentBodyHeader = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
  height: 40px;
`

const Author = styled.span`
  ${typography.contentBodyBold};
  line-height: 16px;
  color: ${colors.primary.orange};
  letter-spacing: 0.01em;
`

const Title = styled.div`
  ${typography.contentTitle};
  line-height: 36px;
  height: 28px;
  overflow: hidden;
  text-overflow: clip;
  white-space: wrap;
  color: ${colors.primary.black};
`
const Description = styled.p`
  line-height: 32px;
  height: 76px;
  text-overflow: clip;
  overflow: hidden;
  color: ${colors.grey[900]};
  ${typography.contentBody};
  padding: 4px 0;
  opacity: 0.4;
`

const Time = styled.time`
  line-height: 16px;
  color: ${colors.grey[100]};
  ${typography.contentBody};
`
