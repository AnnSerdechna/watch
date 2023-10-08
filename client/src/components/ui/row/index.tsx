import {FC, PropsWithChildren} from 'react'
import classNames from 'classnames'

type JustifyContentType = 'start' | 'between'| 'end' | 'center'
type AlignItemsType = 'start' | 'end' | 'center'

type RowProps = {
  className?: string
  justify?: JustifyContentType
  alignItems?: AlignItemsType
}

export const Row: FC<PropsWithChildren<RowProps>> = ({ className, justify = 'start', alignItems = 'center', children }) => (
  <div
    className={classNames(`
      flex
      justify-${justify}
      items-${alignItems}
      h-8
    `, className
    )}
  >
    {children}
  </div>
)
