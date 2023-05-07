import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { defaultProfile } from '@images/common'
import { ImageIcon } from '@svgs/common'
import { colors, flex, flexCenter, font } from '@/styles/emotion'
import { RenderIf } from '@/components/common'
import { cutString, getImageSrcByUuid, snakeToCamel } from '@/utils'
import { Date, Likes, Tag, Title, Views, Writer } from '../styles'
import { convertKilo, convertCommentCount } from '../utils'

interface Props {
  items: Article.MainContent[]
}

const Board = ({ items }: Props) => {
  const { push } = useRouter()

  return (
    <Table>
      <tbody>
        {items.map(item => {
          return (
            <Tr key={item.id}>
              <TdTag css={Tag}>{cutString(item.tag, 8)}</TdTag>
              <TdTitle css={Title}>
                <TitleBox
                  onClick={() =>
                    push(`/article/${snakeToCamel(item.category)}/${item.id}`)
                  }
                >
                  <RenderIf
                    condition={item.containImage}
                    render={<ImageIcon />}
                  />
                  {item.containImage
                    ? cutString(item.title, 22)
                    : cutString(item.title, 24)}
                  <RenderIf
                    condition={item.commentCount > 0}
                    render={
                      <CommentCount>
                        {convertCommentCount(item.commentCount)}
                      </CommentCount>
                    }
                  />
                </TitleBox>
              </TdTitle>
              <TdWriter css={Writer}>
                <WriterBox
                  onClick={() => push(`/user/profile/${item.author.id}`)}
                >
                  <Image
                    src={
                      getImageSrcByUuid(
                        item.author.profileImage.uuidFileName
                      ) ?? defaultProfile
                    }
                    alt="user-profile"
                    width={22}
                    height={22}
                    style={{ borderRadius: '50%' }}
                  />
                  {cutString(item.author.nickname, 6)}
                </WriterBox>
              </TdWriter>
              <TdDate css={Date}>
                {new Intl.DateTimeFormat('ko')
                  .format(item.createdAt)
                  .slice(0, -1)}
              </TdDate>
              <TdViews css={Views}>{convertKilo(item.views, 1)}</TdViews>
              <TdLikes css={Likes}>{convertKilo(item.likes, 1)}</TdLikes>
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
  cursor: pointer;
  width: 100%;
  height: 100%;

  &:hover {
    color: ${colors.primary.orange};
  }
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
  color: ${colors.primary.black};
`
const Tr = styled.tr`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  border-top: 1px solid ${colors.grey[100]};

  &:last-child {
    border-bottom: 1px solid ${colors.grey[100]};
  }
`

const Table = styled.table`
  width: 100%;
`

export default Board
