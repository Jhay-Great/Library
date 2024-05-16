import React from 'react'

function FlexContainer({ children, additionalStyles='' }) {
  return (
    <div className={`min-h-96 flex justify-center items-center gap-10 p-10 sm:gap-20 flex-wrap ${additionalStyles}`}>
      { children }
    </div>
  )
}

export default FlexContainer