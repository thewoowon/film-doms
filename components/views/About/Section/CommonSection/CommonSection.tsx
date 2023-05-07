import { useScrollFadeIn } from '@/hooks'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

export type CommonContainerProps = {
  title: string
  subTitle: string
  description: string
  imageUrl: ReactNode
  imagePosition: 'left' | 'right'
}

const CommonSection = ({
  title,
  subTitle,
  description,
  imageUrl,
  imagePosition,
}: CommonContainerProps) => {
  const scrollFadeIn = useScrollFadeIn(0.2, '20%')
  return (
    <CommonContainerSection className="common-section">
      {imagePosition === 'left' && (
        <CommonImageContainer>{imageUrl}</CommonImageContainer>
      )}
      <CommonTextContainer {...scrollFadeIn}>
        <CommonTitle>{title}</CommonTitle>
        <CommonSubtitle>{subTitle}</CommonSubtitle>
        <CommonDescription>
          {description.split('|').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </CommonDescription>
      </CommonTextContainer>
      {imagePosition === 'right' && (
        <CommonImageContainer>{imageUrl}</CommonImageContainer>
      )}
    </CommonContainerSection>
  )
}
export default CommonSection

const CommonContainerSection = styled.section`
  width: 100%;
  height: 925px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CommonImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CommonTextContainer = styled.div`
  width: 50%;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 80px;
`

const CommonTitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 80px;
`

const CommonSubtitle = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 40px;
  margin-top: 20px;
`
const CommonDescription = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  text-align: left;
  line-height: 45px;
`
