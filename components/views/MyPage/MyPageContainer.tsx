import { Suspense } from 'react'
import styled from '@emotion/styled'
import { flexCenter, flexGap } from '@/styles/emotion'
import { useFetchUserInfo } from '@/services/myPage'
import { Loading } from '@/components/common'
import ProfileSection from './ProfileSection'
import InterestMovieSection from './InterestMovieSection'
import UserInfoSection from './UserInfoSection'
import UserActivitySection from './UserActivitySection'

const MyPage = () => {
  const { data: userInfo } = useFetchUserInfo()

  return (
    <Container>
      <Wrapper>
        <ProfileSection
          profileImage={userInfo.profileImage.uuidFileName}
          nickname={userInfo.nickname}
        />
        <InterestMovieSection interestMovieList={userInfo.interestMovieList} />
        <UserInfoSection
          email={userInfo.email}
          nickname={userInfo.nickname}
          interestMovieList={userInfo.interestMovieList}
          createdAt={userInfo.createdAt}
        />
        <UserActivitySection />
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  ${flexGap('60px')}
  width: 100%;
  max-width: 960px;
`

const Container = styled.div`
  ${flexCenter}
  width: 100%;
  margin: 80px 0;
`

const MyPageContainer = () => {
  return (
    <Suspense fallback={<Loading height="100vh" empty />}>
      <MyPage />
    </Suspense>
  )
}

export default MyPageContainer
