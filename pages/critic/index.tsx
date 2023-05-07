import { OpenGraph } from '@/components/common'

const openGraphProps = {
  title: 'CRITIC',
  url: 'https://film-doms.vercel.app/',
  path: 'critic',
  image:
    'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/12d3ceb7-c251-4695-144f-ba0338ec6400/public',
}

export default function Index() {
  return <OpenGraph {...openGraphProps}></OpenGraph>
}
