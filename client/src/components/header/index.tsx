import {FC} from 'react'
import {Row} from '@/components/ui/row'
import {HeaderMenu} from '@/components/header-menu'

import SearchSvg from '../../../public/icons/search.svg'
import NotificationSvg from '../../../public/icons/bell.svg'
import AvatarImg from '../../../public/images/avatar.png'
import Image from 'next/image'

export const Header: FC = () => (
  <header className={'w-full p-8'}>
    <Row justify={'between'} className={'w-full'}>
      <HeaderMenu />

      <Row className={'gap-6'}>
        <SearchSvg />
        <NotificationSvg />

        <Row className={'gap-2'}>
          <Image src={AvatarImg} alt={'User photo'} />
          <h3 className={'font-semibold'}>Jane</h3>
        </Row>
      </Row>
    </Row>
  </header>
)
