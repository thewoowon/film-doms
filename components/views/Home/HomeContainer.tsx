import CommunityContainer from './Community'
import BannerContainer from './Banner'
import FilmUniverseContainer from './FilmUniverse'
import CriticContainer from './Critic'

const HomeContainer = () => {
  return (
    <>
      <BannerContainer />
      <CommunityContainer />
      <FilmUniverseContainer />
      <CriticContainer />
    </>
  )
}

export default HomeContainer
