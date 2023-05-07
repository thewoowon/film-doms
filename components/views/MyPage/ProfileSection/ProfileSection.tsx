import Image from 'next/image'
import styled from '@emotion/styled'
import { defaultUserProfile } from '@images/common'
import { ProfileEdit } from '@svgs/common'
import { colors, flex, font } from '@/styles/emotion'
import { getImageSrcByUuid } from '@/utils'

interface Props {
  profileImage: string
  nickname: string
}

const ProfileSection = ({ profileImage, nickname }: Props) => {
  return (
    <Container>
      <ProfileImageBox>
        <Image
          src={getImageSrcByUuid(profileImage) ?? defaultUserProfile}
          alt={`profile-${nickname}`}
          fill
        />
        <ProfileEditBox>
          <ProfileEdit />
        </ProfileEditBox>
      </ProfileImageBox>
      <NickName>{nickname}</NickName>
      <Description>{`'${nickname}' 님 환영합니다!`}</Description>
    </Container>
  )
}

const Description = styled.span`
  ${font({ size: '16px', weight: '500', lineHeight: '20px' })}
  color: #888888;
`

const NickName = styled.span`
  ${font({ size: '20px', weight: '700', lineHeight: '20px' })}
  color: ${colors.grey[900]};
`

const ProfileEditBox = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
`

const ProfileImageBox = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  & > img {
    border-radius: 50%;
  }
`

const Container = styled.div`
  ${flex({ direction: 'column', align: 'center' })}
  width: 100%;
  gap: 24px;
`

export default ProfileSection
