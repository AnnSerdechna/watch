import {FC} from 'react'
import {Card} from '@/components/ui/card'
import MovieImage from '../../../public/images/hero-bg.jpg'
import {VSpace} from '@/components/ui/v-space'
import {FavouriteBtn} from '@/components/ui/favourite-btn'

export const MovieCard: FC = () => (
  <Card className={'relative'}>
    <div className={'absolute top-5 right-5 z-10'}>
      <FavouriteBtn className={'rounded'} btnSize={'sm'} isFavourite={false} />
    </div>
    <div className={'relative rounded-2xl'} style={{backgroundImage: `url(${MovieImage.src})`, height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className={'absolute bottom-0 w-full pt-4 px-5 rounded-b-2xl bg-card-gradient'} style={{height: 86}}>
        <VSpace>
          <h2 className={'text-black font-semibold'}>Tokyo Train</h2>
          <p className={'text-black text-sm'}>2022 | Action comedy</p>
        </VSpace>
      </div>
    </div>
  </Card>
)
