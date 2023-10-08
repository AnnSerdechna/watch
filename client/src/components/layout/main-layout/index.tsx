import {FC, PropsWithChildren} from 'react'
import {Sidebar} from '@/components/sidebar'
import {Header} from '@/components/header'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className={'flex'}>
    <Sidebar />

    <main className={'relative overflow-y-scroll h-screen w-full [&::-webkit-scrollbar]:hidden'}>
      <Header />
      {children}
    </main>
  </div>
)
