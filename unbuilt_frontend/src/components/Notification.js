import React from 'react'

const Notification = ({ message, cssSelector}) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={cssSelector}>
        {message}
      </div>
    )
  }

  export default Notification