import {FC} from 'react'
import Link from 'next/link'

import LogoSvg from '../../../public/icons/logo.svg'
import {Row} from '@/components/ui/row'

export const Logo: FC = () => (
  <Link href={'/'}>
    <Row className={'gap-2'}>
      <LogoSvg />
      <h1 className={'text-xl font-bold uppercase'}>Watch</h1>
    </Row>
  </Link>
)
