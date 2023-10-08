import {FC} from 'react'
import classNames from 'classnames'

export const Button: FC<{ btnText: string, className?: string }> = ({ btnText, className }) => (
  <button
    className={classNames(`
      h-14 
      px-6 
      text-[#fff]
      hover:text-[#6100C2]
      bg-accent hover:bg-btn-gradient
      border
      border-accent 
      rounded-xl  
      transition
      delay-100
      active:shadow-md
      active:shadow-[#6100C2]
    `, className)}
  >
    {btnText}
  </button>
)
