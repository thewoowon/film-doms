import '@/styles/globals.css'
import '@/styles/anime.css'
import '@/styles/carousel.css'
import '@/styles/modal.css'
import type { AppProps } from 'next/app'
import { useCallback } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import * as gtag from 'lib/gtag'
import GlobalStyles from '@/styles/GlobalStyles'
import { AppLayout } from '@views/Layout'
import { AppScript, useStartWorker } from '@views/_App'
import { useRouterChange } from '@/hooks'
import { RecoilRoot } from 'recoil'
import { Error, ResetErrorBoundary } from '@/components/common'

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
      },
    },
  })

  const handleRouteChange = useCallback((url: URL) => {
    gtag.pageview(url)
  }, [])

  useRouterChange(handleRouteChange)

  const { isActiveServiceWorker } = useStartWorker()

  if (!isActiveServiceWorker) {
    return <div>서비스워커가 활성화 되기 전입니다.</div>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyles />
        <AppScript />
        <ResetErrorBoundary fallback={<Error />}>
          <AppLayout>
            <Component {...pageProps} />
            <Toaster />
          </AppLayout>
        </ResetErrorBoundary>
      </RecoilRoot>
    </QueryClientProvider>
  )
}
