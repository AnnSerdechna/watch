import {FC, PropsWithChildren} from 'react'
import classNames from 'classnames'

export const VSpace: FC<PropsWithChildren<{ space?: 'sm' | 'md' | 'lg', className?:string }>> = ({ space, className, children }) => {
  return (
    <div
      className={classNames(`
        flex
        flex-col
        gap-2
      `,
        {'gap-4': space === 'sm'},
        {'gap-6': space === 'md'},
        {'gap-8': space === 'lg'},
        className
      )}
    >
      {children}
    </div>
  )
}
