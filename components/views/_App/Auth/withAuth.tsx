import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

function withAuth(Component: any) {
  return function WrappedComponent(props: any) {
    const router = useRouter()

    if (!Cookies.get('access_token')) {
      router.push('/auth/signin')
      return null
    }

    return <Component {...props} />
  }
}

export default withAuth
