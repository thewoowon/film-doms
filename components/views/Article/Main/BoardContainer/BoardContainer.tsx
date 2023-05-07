import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import {
  useFetchArticleNoticeList,
  useFetchArticleMainContentByCategory,
} from '@/services/article'
import { flex, flexCenter, flexGap, font } from '@/styles/emotion'
import { ArticleBoard, CriticBoard } from './ArticleBoard'
import { camelToSnake } from '@/utils'
import { Pagination, SwitchCase } from '@/components/common'

interface Props {
  category: string
  params: Required<Omit<Article.MainContentParams, 'tag'>> &
    Pick<Article.MainContentParams, 'tag'>
  onChangePage: (page: number) => void
}

const BoardContainer = ({
  category,
  params: { page, tag, size },
  onChangePage,
}: Props) => {
  const { push } = useRouter()

  const { data: noticeList } = useFetchArticleNoticeList()
  const { data: articleList } = useFetchArticleMainContentByCategory(
    camelToSnake(category),
    {
      page: Math.max(page - 1, 0),
      tag,
      size,
    }
  )

  return (
    <Container>
      <SwitchCase
        value={category}
        caseBy={{
          critic: (
            <>
              <CriticBoard criticItems={articleList.content} />
              <ButtonBox>
                <Button onClick={() => push(`/write/article/${category}`)}>
                  게시글 작성하기
                </Button>
              </ButtonBox>
            </>
          ),
        }}
        defaultRender={
          <>
            <ArticleBoard
              noticeItems={noticeList}
              articleItems={articleList.content}
            />
            <ButtonBox>
              <Button onClick={() => push(`/write/article/${category}`)}>
                게시글 작성하기
              </Button>
            </ButtonBox>
          </>
        }
      />
      <Box>
        <Pagination
          count={5}
          currentPage={page}
          totalPage={articleList.totalPages}
          onChange={onChangePage}
        />
      </Box>
    </Container>
  )
}

const Box = styled.div`
  ${flexCenter}
`

const Button = styled.button`
  ${flexCenter}
  width: 193px;
  height: 40px;
  color: #ffffff;
  ${font({ weight: '700', lineHeight: '16px' })}
  background-color: #888888;
`

const ButtonBox = styled.div`
  ${flex({ align: 'center', justify: 'flex-end' })}
`

const Container = styled.div`
  ${flexGap('20px')}
  width: 100%;
`

export default BoardContainer
