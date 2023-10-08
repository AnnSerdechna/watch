import {FC} from 'react'
import Link, {LinkProps} from 'next/link'
import classNames from 'classnames'

const HeaderMenuLink: FC<LinkProps & {text: string, isActive: boolean}> = ({ href, text, isActive }) => (
  <Link
    href={href}
    className={classNames(`
      block 
      py-1 
      px-2 
      hover:bg-accent/20
      rounded
      transition
    `,
      {'bg-accent/20': isActive}
    )}
  >
    {text}
  </Link>
)

export const HeaderMenu: FC = () => (
  <nav>
    <ul className={'flex gap-1'}>
      <li>
        <HeaderMenuLink href={'/'} isActive={true} text={'Movies'} />
      </li>
      <li>
        <HeaderMenuLink href={'/'} isActive={false} text={'Series'} />
      </li>
      <li>
        <HeaderMenuLink href={'/'} isActive={false} text={'Documentaries'} />
      </li>
    </ul>
  </nav>
)
