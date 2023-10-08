import {FC, ReactNode} from 'react'

export const IconButton: FC<{icon: ReactNode}> = ({ icon }) => (
  <button>
    {icon}
  </button>
)
