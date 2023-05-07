import { OpenGraph } from '@/components/common'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const { id: criticId } = router.query

  return (
    <OpenGraph>
      <main className="mx-auto">{criticId}</main>
    </OpenGraph>
  )
}
