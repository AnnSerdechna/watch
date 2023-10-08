import {FC} from 'react'

import HeroImg from '../../../public/images/hero-bg.jpg'
import {Button} from '@/components/ui/button'
import {Row} from '@/components/ui/row'
import {FavouriteBtn} from '@/components/ui/favourite-btn'
import {VSpace} from '@/components/ui/v-space'

type HomeHeroProps = {
  movieTitle: string
  movieInfo: string
}

export const HomeHero: FC<HomeHeroProps> = ({ movieTitle, movieInfo}) => {
  return (
    <div style={{height: 455, backgroundImage: `url(${HeroImg.src})`}} className={'relative bg-no-repeat bg-cover'}>
      <div className={'absolute bottom-12 left-8'}>
        <VSpace space={'md'}>
          <VSpace space={'sm'}>
            <h1 className={'text-5xl font-semibold'}>{movieTitle}</h1>
            <p className={'text-sm'}>{movieInfo}</p>
          </VSpace>

          <Row className={'gap-4'}>
            <Button btnText={'Watch now'} />
            <FavouriteBtn isFavourite={true} />
          </Row>
        </VSpace>
      </div>
    </div>
  )
}
