import React from 'react'

function FlexContainer({ children, additionalStyles='' }) {
  return (
    <div className={`flex justify-center items-center gap-20 flex-wrap ${additionalStyles}`}>
      { children }
    </div>
  )
}

export default FlexContainer