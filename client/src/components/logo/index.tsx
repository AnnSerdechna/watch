import {FC} from 'react'
import Link from 'next/link'

import LogoSvg from '../../../public/icons/logo.svg'
import {JustifyContentType, Row} from '@/components/ui/row'

export const Logo: FC<{justify?: JustifyContentType}> = ({ justify }) => (
  <Link href={'/'}>
    <Row className={'gap-2'} justify={justify ? justify : 'start'}>
      <LogoSvg />
      <h1 className={'text-xl font-bold uppercase'}>Watch</h1>
    </Row>
  </Link>
)
