import {FC, PropsWithChildren} from 'react'
import classNames from 'classnames'

type CardProps = PropsWithChildren<{
  height?: number | string
  className?: string
}>

export const Card: FC<CardProps> = ({ className, height, children }) => (
  <div
    className={classNames(`
      border
      border-grey
      rounded-2xl
    `, className)}
    style={{height: height ? height : 300}}
  >
    {children}
  </div>
)
