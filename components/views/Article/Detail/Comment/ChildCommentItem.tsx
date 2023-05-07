import { defaultProfile } from '@/assets/images/common'
import { Button } from '@/components/common'
import { colors, flexGap, typography } from '@/styles/emotion'
import { getImageSrcByUuid } from '@/utils'
import { dateDiff } from '@/utils/dateDiff'
import styled from '@emotion/styled'
import Image from 'next/image'

const ChildCommentItem = ({
  comment,
  borderBottom,
}: {
  comment: Article.ChildComment
  borderBottom: boolean
}) => {
  return (
    <CommentItemContainer borderBottom={borderBottom}>
      <CommentProfileBox>
        <Image
          src={
            getImageSrcByUuid(comment.author.profileImage.uuidFileName) ??
            defaultProfile
          }
          alt="user-profile"
          width={40}
          height={40}
          style={{
            borderRadius: '50%',
            marginTop: '6px',
          }}
          priority
        />
      </CommentProfileBox>
      <CommentInfoBox>
        <NicknameBox>
          {comment.author.nickname}
          <span>{dateDiff(comment.createdAt)}</span>
        </NicknameBox>
        <ContentBox>{comment.content}</ContentBox>
      </CommentInfoBox>
    </CommentItemContainer>
  )
}

export default ChildCommentItem

const CommentItemContainer = styled.div<{ borderBottom: boolean }>`
  ${flexGap('10px', 'row')}
  width: 100%;
  padding: 24px 0;
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? `1px solid #e9ecef` : 'none'};
  item-align: flex-start;
`

const CommentProfileBox = styled.div`
  ${flexGap('10px', 'column')}
`

const CommentInfoBox = styled.div`
  ${flexGap('10px', 'column')}
`

const NicknameBox = styled.div`
  ${flexGap('6px', 'row')}
  align-items: center;
  ${typography.contentBody}
  color: ${colors.primary.black};
  font-weight: 600;
  span {
    ${typography.tag}
    color: ${colors.grey[100]};
    font-weight: 600;
  }
`

const ContentBox = styled.div`
  ${typography.contentBody}
  color: ${colors.primary.black};
`

const ButtonBox = styled.div`
  ${flexGap('10px', 'row')}
  align-items: center;
`

const CommentButton = styled(Button)`
  background-color: white;
  ${typography.tag}
  padding: 5px 18px;
  border: 1px solid ${colors.primary.black};
  font-weight: 500;
`

const ReplyBox = styled.div`
  ${flexGap('10px', 'row')}
  width: 100%;
  item-align: flex-start;
`
