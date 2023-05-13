import { Suspense, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors, flex, flexGap } from '@/styles/emotion'
import { Tab } from '@/components/common'
import TagList from './TagList'
import BoardContainer from './BoardContainer'
import Image from 'next/image'
import { SlideContainer } from './Slide'

const CriticContainer = () => {
  const category = 'critic'
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Container>
      <BannerContainer>
        <Image
          alt={'critic_banner'}
          width={1280}
          height={321}
          src={
            'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/40d9a0e9-4983-47a7-35e8-ee9476c31d00/public'
          }
          priority
        />
        <TextArea>
          <BannerTitle>{'C R I T I C'}</BannerTitle>
          <BannerSubTitle>
            {'필름덤즈에서는 누구나 비평가가 될 수 있습니다.'}
          </BannerSubTitle>
        </TextArea>
      </BannerContainer>
      <ThisWeekText>THIS WEEK&#39;S CRITIC</ThisWeekText>
      <SlideContainer />
      <Title>{'CRITIC'}</Title>
      <SubTitle>{'필름덤즈의 최신 비평들을 확인해 보세요!'}</SubTitle>
      <Tab.Group
        css={TabGroup}
        selected="전체"
        onChange={() => setCurrentPage(1)}
        clearDependency={category}
      >
        <TopBox>
          <Tab.List css={TabList}>
            <Suspense fallback={<TagListLoading />}>
              <TagList category={category} />
            </Suspense>
          </Tab.List>
        </TopBox>
        <Tab.Views>
          {({ selected }) => (
            <Suspense fallback={<BoardLoading />}>
              <BoardContainer
                category={category}
                params={{
                  page: currentPage,
                  size: 9,
                  ...(selected !== '전체' && { tag: selected }),
                }}
                onChangePage={page => setCurrentPage(page)}
              />
            </Suspense>
          )}
        </Tab.Views>
      </Tab.Group>
    </Container>
  )
}

const TabList = css`
  flex: 1;
  overflow-x: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.grey[100]};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.primary.white};
    border-radius: 3px;
  }
`

const TopBox = styled.div`
  ${flex({ justify: 'space-between' })}
  gap: 16px;
  width: 100%;
`

const TabGroup = css`
  ${flexGap('40px')}
`

const BannerContainer = styled.div`
  position: relative;
  background-color: #000000;
`

const TextArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  top: 0;
`

const BannerTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;

  display: flex;
  align-items: center;
  letter-spacing: 2px;

  color: #ffffff;
`

const BannerSubTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  display: flex;
  align-items: center;

  color: #ffffff;
  padding-bottom: 45px;
`

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;

  display: flex;
  align-items: center;
  text-align: center;
  color: #ff5414;
  margin-top: 40px;
`

const SubTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #444444;
`

const Container = styled.div`
  ${flexGap('30px')}
  align-items: center;
  width: 100%;
`

const BoardLoading = styled.div`
  width: 100%;
  height: 1606px;
`

const TagListLoading = styled.div`
  flex: 1;
  height: 34px;
`

const ThisWeekText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  color: #ff5414;
`

export default CriticContainer
