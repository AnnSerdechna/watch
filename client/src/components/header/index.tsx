import {FC} from 'react'
import {Row} from '@/components/ui/row'
import {HeaderMenu} from '@/components/header-menu'

import SearchSvg from '../../../public/icons/search.svg'
import NotificationSvg from '../../../public/icons/bell.svg'
import AvatarImg from '../../../public/images/avatar.png'
import Image from 'next/image'
import {IconButton} from '@/components/ui/icon-button'

export const Header: FC = () => (
  <header className={'absolute top-0 w-full p-8 z-10'}>
    <Row justify={'between'} className={'w-full'}>
      <HeaderMenu />

      <Row className={'gap-6'}>
        <IconButton icon={<SearchSvg />} />
        <IconButton icon={<NotificationSvg />} />

        <Row className={'gap-2'}>
          <Image src={AvatarImg} alt={'User photo'} />
          <h3 className={'font-semibold'}>Jane</h3>
        </Row>
      </Row>
    </Row>
  </header>
)
