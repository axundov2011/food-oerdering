import React from 'react'

const Title = ({children, className}) => {
  return (
    <div className={`${className} font-bold mb-4`}>{children}</div>
  )
}
//font-dancing font-bold
export default Title