import {FC} from 'react'
import Link from 'next/link'

const HeaderMenuLink: FC = () => (
  <></>
)

export const HeaderMenu: FC = () => (
  <nav>
    <ul className={'flex gap-1'}>
      <li>
        <Link href={'/'} className={'block py-1 px-2 bg-accent/20 rounded '}>
          Movies
        </Link>
      </li>
      <li>
        <Link href={'/'} className={'block py-1 px-2 bg-accent/20 rounded '}>
          Series
        </Link>
      </li>
      <li>
        <Link href={'/'} className={'block py-1 px-2 bg-accent/20 rounded '}>
          Documentaries
        </Link>
      </li>
    </ul>
  </nav>
)
