'use client'
import {FC, PropsWithChildren, ReactNode} from 'react'
import Link, {LinkProps} from 'next/link'
import classNames from 'classnames'
import {usePathname} from 'next/navigation'

type MenuItemProps = {
  label: string
  pathname: string
  Icon?: ReactNode
}

export type MenuItemsProps = MenuItemProps & {
  id: string
}

const NavLink: FC<PropsWithChildren<LinkProps>> = ({ children, href }) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={classNames(`
        flex 
        gap-3 
        py-3 
        px-4 
        text-white 
        opacity-80 
        rounded-lg 
        transition-all 
        delay-100 
        hover:bg-accent 
        hover:opacity-100 
        hover:font-medium
      `,
        {
          'bg-accent opacity-100 font-medium': pathname === href
        }
        )}>
      {children}
    </Link>
  )
}

const MenuItem: FC<MenuItemProps> = ({ label, pathname, Icon }) => (
  <li>
    <NavLink
      href={pathname}
    >
      {Icon}
      {label}
    </NavLink>
  </li>
)

export const NavMenu: FC<{ data: MenuItemsProps[] }> = ({data}) => (
  <ul className={'flex flex-col gap-1 px-3'}>
    {data.map(({id, label, pathname, Icon}) => (
      <MenuItem
        key={id}
        label={label}
        pathname={pathname}
        Icon={Icon}
      />
    ))}
  </ul>
)
