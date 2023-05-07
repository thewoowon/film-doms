import Board from './Board'
import THead from './THead'
import NoticeBoard from './NoticeBoard'

interface Props {
  noticeItems: Article.Notice[]
  articleItems: Article.MainContent[]
}

const ArticleBoard = ({ noticeItems, articleItems }: Props) => {
  return (
    <div>
      <THead />
      <NoticeBoard items={noticeItems} />
      <Board items={articleItems} />
    </div>
  )
}

export default ArticleBoard
