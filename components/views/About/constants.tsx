import { BigF, BigI, BigL, BigM } from '@/assets/svgs/alphabet'
import { CommonContainerProps } from './Section/CommonSection/CommonSection'

export const commons: CommonContainerProps[] = [
  {
    title: 'FEELING',
    subTitle: '나를 공유할 수 있는 공간',
    description: `필름덤즈를 사용하는 모든 이들은|영화롭고 다채로운 자신만의 색을|언제나 자유롭게 표출할 수 있습니다.|다양한 예술과 미디어에 대한 의견을|간단한 리뷰부터 구체화된 비평글까지|여러 방식으로 필름덤즈에서 표출해 보세요.`,
    imageUrl: <BigF />,
    imagePosition: 'left',
  },
  {
    title: 'ICONIC',
    subTitle: '영화로운 예술 화합의 상징',
    description:
      '필름덤즈는 영화를 비롯한 모든 예술이|하나로 화합할 수 있도록 새로운 장을 제공합니다.|동시에 영화를 사랑하는 이들이 영화와 관련된 작품을|선보이며 이야기를 나눌 수 있는 소통의 장과|독자와 에디터의 구분이 없는 화합의 장을|제공하며 성장하도록 끊임없이 노력하겠습니다.',
    imageUrl: <BigI />,
    imagePosition: 'right',
  },
  {
    title: 'LINK US',
    subTitle: '우리 모두의 연결',
    description:
      '영화계 진출을 목표로 매일 꿈을 키워가는|대학생들을 위해 필름덤즈는 서포터즈, 공모전,|연합 동아리와 같은 다양하고 유익한 정보를|제공합니다. 더 나아가 영화 관련 행사부터|직무 교육까지 선보일 수 있도록 노력하겠습니다.',
    imageUrl: <BigL />,
    imagePosition: 'left',
  },
  {
    title: 'MAGAZINE',
    subTitle: '영화인을 위한, 영화인의 출판사 필름덤즈',
    description: `필름덤즈는 출판사라는 정체성을 잃지 않고자|반기별로 무비 매거진을 제작하고 있습니다.|동시에 필름덤즈 홈페이지를 사용하는 모든 이들이|저희 무비 매거진의 독자이자 에디터가 될 수 있는|기회 또한 바로 이곳 필름덤즈에서 제공할 예정입니다.`,
    imageUrl: <BigM />,
    imagePosition: 'right',
  },
]
