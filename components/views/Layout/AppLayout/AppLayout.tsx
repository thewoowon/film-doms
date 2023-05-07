import { type PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { flex } from '@/styles/emotion'
import Header from '../Header'
import Footer from '../Footer'
import { useRouter } from 'next/router'

const AppLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  return (
    <>
      <Header />
      <Main backgroundColor={router.pathname == '/about' ? '#111111' : 'white'}>
        {children}
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main<{ backgroundColor: string }>`
  width: 100%;
  ${flex({ direction: 'column', align: 'center' })}
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export default AppLayout
