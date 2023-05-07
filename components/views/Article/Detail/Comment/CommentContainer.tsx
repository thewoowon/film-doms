import { useFetchArticleCommentListByCategoryById } from '@/services/article'
import { colors, flexGap, typography } from '@/styles/emotion'
import styled from '@emotion/styled'
import { ArticleDetailProps } from '../ArticleDetail'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

const CommentContainer = ({ articleId, category }: ArticleDetailProps) => {
  const { data: commentList } = useFetchArticleCommentListByCategoryById(
    category,
    articleId
  )

  return (
    <Container>
      <CommentCount>{`댓글 ${commentList.commentCount}개`}</CommentCount>
      {commentList.comments.map((comment, index) => {
        return (
          <CommentItem
            key={index}
            borderBottom={commentList.commentCount - 1 !== index}
            comment={comment}
          />
        )
      })}
      <CommentForm />
    </Container>
  )
}

export default CommentContainer

const Container = styled.div`
  ${flexGap('20px')}
  width: 914px;
`

const CommentCount = styled.div`
  ${typography.contentBodyBold}
  color:${colors.primary.black}
  font-weight:600;
`
