import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
      </div>
      <div className="mfs-auto">
        <a href="" target="_blank" rel="noopener noreferrer">2022</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
