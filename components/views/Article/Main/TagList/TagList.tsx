import styled from '@emotion/styled'
import { flexGap } from '@/styles/emotion'
import { Tab, Tag } from '@/components/common'
import { useFetchArticleTagListByCategory } from '@/services/article'
import { camelToSnake } from '@/utils'

interface Props {
  category: string
}

const TagList = ({ category }: Props) => {
  const { data: tagList } = useFetchArticleTagListByCategory(
    camelToSnake(category)
  )

  const tagColor = category === 'critic' ? 'default' : 'black'

  return (
    <Box>
      <Tab value="전체">
        {({ isActive }) => {
          return (
            <Tag
              as="button"
              shape="round"
              color={isActive ? 'orange' : tagColor}
              {...(isActive && { fill: 'true' })}
            >
              전체
            </Tag>
          )
        }}
      </Tab>
      {tagList.map(({ tag }) => {
        return (
          <Tab key={`tag-${tag}`} value={tag}>
            {({ isActive }) => {
              return (
                <Tag
                  as="button"
                  shape="round"
                  color={isActive ? 'orange' : tagColor}
                  {...(isActive && { fill: 'true' })}
                >
                  {tag}
                </Tag>
              )
            }}
          </Tab>
        )
      })}
    </Box>
  )
}

const Box = styled.div`
  ${flexGap('8px', 'row')}
  width: max-content;
`

export default TagList
