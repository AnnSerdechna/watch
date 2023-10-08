import {HomeHero} from '@/components/home-hero'
import {MovieCard} from '@/components/movie-card'
import {MainLayout} from '@/components/layout/main-layout'

export default function Home() {
  return (
    <MainLayout>
      <HomeHero
        movieTitle={'Insider'}
        movieInfo={'2022 | Comedy horror | 1 Season'}
      />

      <section className={'px-8 pb-8'}>
        <div className={'py-4'}>
          <h1 className={'text-xl font-semibold'}>Trending</h1>
        </div>
        <div className={'grid grid-cols-4 gap-6'}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>
      <section className={'px-8 pb-8'}>
        <div className={'py-4'}>
          <h1 className={'text-xl font-semibold'}>Continue watching</h1>
        </div>
        <div className={'grid grid-cols-4 gap-6'}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>
    </MainLayout>
  )
}
