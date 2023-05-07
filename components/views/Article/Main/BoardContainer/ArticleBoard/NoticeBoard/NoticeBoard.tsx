import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { defaultProfile } from '@images/common'
import { ImageIcon } from '@svgs/common'
import { colors, flex, flexCenter, font } from '@/styles/emotion'
import { RenderIf } from '@/components/common'
import { cutString } from '@/utils'
import { convertCommentCount, convertKilo } from '../utils'
import { Date, Likes, Tag, Title, Views, Writer } from '../styles'

interface Props {
  items: Article.Notice[]
}

const NoticeBoard = ({ items }: Props) => {
  const { push } = useRouter()

  return (
    <Table>
      <tbody>
        {items.slice(0, 2).map(notice => {
          return (
            <Tr key={notice.id}>
              <TdTag css={Tag}>{notice.tag}</TdTag>
              <TdTitle css={Title}>
                <TitleBox onClick={() => push(`/article/notice/${notice.id}`)}>
                  <RenderIf
                    condition={notice.isContainImage}
                    render={<ImageIcon />}
                  />
                  {notice.isContainImage
                    ? cutString(notice.title, 22)
                    : cutString(notice.title, 24)}
                  <RenderIf
                    condition={notice.comments.length > 0}
                    render={
                      <CommentCount>
                        {convertCommentCount(notice.comments.length)}
                      </CommentCount>
                    }
                  />
                </TitleBox>
              </TdTitle>
              <TdWriter css={Writer}>
                <WriterBox>
                  <Image
                    src={notice.writer.profile ?? defaultProfile}
                    alt="user-profile"
                    width={22}
                    height={22}
                    style={{ borderRadius: '50%' }}
                  />
                  {notice.writer.nickname}
                </WriterBox>
              </TdWriter>
              <TdDate css={Date}>{notice.createAt}</TdDate>
              <TdViews css={Views}>{convertKilo(notice.views, 1)}</TdViews>
              <TdLikes css={Likes}>{convertKilo(notice.likes, 1)}</TdLikes>
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

const TdLikes = styled.td`
  ${flexCenter}
  color: ${colors.grey[900]};
`

const TdViews = styled.td`
  ${flexCenter}
  color: ${colors.grey[900]};
`

const TdDate = styled.td`
  ${flexCenter}
  color: ${colors.grey[900]};
`

const WriterBox = styled.div`
  ${flexCenter}
  color: ${colors.grey[900]};
  gap: 4px;
  width: 100%;
  height: 100%;
`

const TdWriter = styled.td`
  white-space: nowrap;
  overflow: hidden;
  padding: 0 16px;
`

const CommentCount = styled.span`
  ${font({ lineHeight: '27px' })}
  color: ${colors.primary.orange};
  text-decoration: underline ${colors.primary.orange};
`

const TitleBox = styled.div`
  ${font({ size: '16px', weight: '700' })}
  ${flex({ align: 'center' })}
  gap: 8px;
  color: ${colors.primary.black};
  width: max-content;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: ${colors.primary.orange};
  }
`

const TdTitle = styled.td`
  padding: 0 16px;
  white-space: nowrap;
  overflow: hidden;
`

const TdTag = styled.td`
  ${flexCenter}
  color: ${colors.primary.orange};
  ${font({ weight: '700' })}
`

const Tr = styled.tr`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #f6eeeb;
  border-top: 1px solid ${colors.grey[100]};
`

const Table = styled.table`
  width: 100%;
`

export default NoticeBoard
