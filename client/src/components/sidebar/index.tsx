import {FC} from 'react'
import {Logo} from '@/components/logo'

import {MenuItemsProps, NavMenu} from '@/components/nav-menu'
import HomeSvg from '../../../public/icons/film.svg'
import FavouritesSvg from '../../../public/icons/heart.svg'
import TrendingSvg from '../../../public/icons/trending-up.svg'
import CalendarSvg from '../../../public/icons/calendar.svg'
import CommunitySvg from '../../../public/icons/users.svg'
import SocialSvg from '../../../public/icons/message-circle.svg'
import SettingsSvg from '../../../public/icons/sliders.svg'
import LogoutSvg from '../../../public/icons/log-out.svg'

const menuItems: MenuItemsProps[] = [
  {
    id: '1',
    label: 'Home',
    pathname: '/',
    Icon: <HomeSvg />,
  },
  {
    id: '2',
    label: 'Favourites',
    pathname: '/favourites',
    Icon: <FavouritesSvg />,
  },
  {
    id: '3',
    label: 'Trending',
    pathname: 'trending',
    Icon: <TrendingSvg />,
  },
  {
    id: '4',
    label: 'Coming soon',
    pathname: '/coming',
    Icon: <CalendarSvg />,
  },
]

const menuItemsMiddle: MenuItemsProps[] = [
  {
    id: '3',
    label: 'Community',
    pathname: '/community',
    Icon: <CommunitySvg />,
  },
  {
    id: '4',
    label: 'Social',
    pathname: '/social',
    Icon: <SocialSvg />,
  },
]

const menuItemsBottom: MenuItemsProps[] = [
  {
    id: '3',
    label: 'Settings',
    pathname: '/settings',
    Icon: <SettingsSvg />,
  },
  {
    id: '4',
    label: 'Logout',
    pathname: '/logout',
    Icon: <LogoutSvg />,
  },
]

export const Sidebar: FC = () => {
  return (
    <aside className={'h-screen w-aside shadow-3xl'}>
      <header className={'h-20 flex items-center px-10'}>
        <Logo />
      </header>
      <nav className={'flex flex-col justify-between pb-10'} style={{height: 'calc(100vh - 80px)'}}>
        <NavMenu data={menuItems} />
        <NavMenu data={menuItemsMiddle} />
        <NavMenu data={menuItemsBottom} />
      </nav>
    </aside>
  )
}
