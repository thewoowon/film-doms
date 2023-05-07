import { Suspense } from 'react'
import { Divider, Loading, SwitchCase, Tab } from '@/components/common'
import ArticleContainer from './ArticleContainer'
import CommentContainer from './CommentContainer'
import styled from '@emotion/styled'
import { colors, flex, flexGap, font } from '@/styles/emotion'
import { css } from '@emotion/react'

const ACTIVITY_TABLIST = [
  {
    value: 'article',
    label: '작성글',
    component: ArticleContainer,
  },
  {
    value: 'comment',
    label: '작성댓글',
    component: CommentContainer,
  },
]

const UserActivitySection = () => {
  return (
    <Container>
      <Tab.Group selected={ACTIVITY_TABLIST[0].value}>
        <Tab.List css={TabList}>
          <Divider color={colors.primary.orange} size={4} limit="24px" />
          <Box>
            <Title>나의활동</Title>
            <TabBox>
              {ACTIVITY_TABLIST.map(({ value, label }) => {
                return (
                  <Tab key={value} value={value}>
                    {({ isActive }) => {
                      return <TabLabel isActive={isActive}>{label}</TabLabel>
                    }}
                  </Tab>
                )
              })}
            </TabBox>
          </Box>
          <Divider color={colors.primary.orange} />
        </Tab.List>
        <Tab.Views>
          {({ selected }) => {
            return (
              <Suspense fallback={<Loading height="880px" empty />}>
                <SwitchCase
                  value={selected}
                  caseBy={ACTIVITY_TABLIST.reduce(
                    (acc, { value, component: Component }) => ({
                      ...acc,
                      [value]: <Component />,
                    }),
                    {}
                  )}
                />
              </Suspense>
            )
          }}
        </Tab.Views>
      </Tab.Group>
    </Container>
  )
}

const TabBox = styled.div`
  ${flexGap('28px', 'row')}
`

const TabList = css`
  ${flexGap('20px')}
`

const Box = styled.div`
  ${flex({ justify: 'space-between' })}
`

const TabLabel = styled.button<{ isActive: boolean }>`
  ${font({ size: '16px', weight: '700', lineHeight: '24px' })}
  color: ${({ isActive }) =>
    isActive ? colors.primary.orange : colors.grey[100]};
  border-bottom: ${({ isActive }) =>
    isActive ? `4px solid ${colors.primary.orange}` : 'none'};
  padding: 4px 6px;
`

const Title = styled.h1`
  ${font({ size: '20px', weight: '700', lineHeight: '24px' })}
  color: ${colors.grey[900]};
`

const Container = styled.div`
  ${flexGap('20px')}
  width: 100%;
`

export default UserActivitySection
