import { Thumb } from '@/assets/svgs/common'
import { Button, Divider } from '@/components/common'
import { useFetchArticleDetailContentByCategoryById } from '@/services/article'
import { useFetchArticleCommentListByCategoryById } from '@/services/article'
import { colors, flexGap, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import { ProfileBar } from './ProfileBar'

export type ArticleDetailProps = {
  articleId: number
  category: string
}

export const ArticleDetail = ({ articleId, category }: ArticleDetailProps) => {
  const { data: article } = useFetchArticleDetailContentByCategoryById(
    category,
    articleId
  )
  const { data: comments } = useFetchArticleCommentListByCategoryById(
    category,
    articleId
  )

  return (
    <Container>
      <Category>{article.tag}</Category>
      <Title>{article.title}</Title>
      <ProfileBar article={article} count={comments.commentCount} />
      <Divider color={colors.grey[100]} size={1} />
      <Content>
        <TopContentGrid>
          {article && `filmdoms/${article.id}`}
          <GrayButton>복사</GrayButton>
        </TopContentGrid>
        {article && article.content}
        <BottomContentGrid>
          <OrangeButton leftIcon={<Thumb />}>{article.likes}</OrangeButton>
        </BottomContentGrid>
      </Content>
      <Divider color={colors.grey[100]} size={1} />
    </Container>
  )
}

const Container = styled.div`
  ${flexGap('16px')}
  width: 914px;
`

const Category = styled.div`
  ${typography.contentTitle}
  color: ${colors.grey[900]};
`

const Title = styled.div`
  ${typography.h5}
  color: ${colors.primary.black};
`

const Content = styled.div`
  ${typography.contentBody}
  color: ${colors.grey[600]};
`

const TopContentGrid = styled.div`
  ${flexGap('16px', 'row')}
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 40px;
  ${typography.contentBody}
  color: ${colors.grey[100]};
`

const BottomContentGrid = styled.div`
  ${flexGap('16px')}
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 72px;
  margin-bottom: 60px;
`
const OrangeButton = styled(Button)`
  color: ${colors.primary.orange};
  border: 2px solid ${colors.primary.orange};
  background-color: white;
  padding: 6px 18px;
`

const GrayButton = styled(Button)`
  color: #ffffff;
  border: none;
  background-color: #888888;
  ${typography.tag}
  padding: 6px 18px;
`
