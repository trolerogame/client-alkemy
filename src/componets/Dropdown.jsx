import React from 'react'

const Dropdown = ({setModal,logOut}) => {
  return (
    <div>
      <button onClick={() => setModal(true)}>Create Operation</button>
      <button onClick={() => logOut()} >Log Out</button>
    </div>
  )
}

export default Dropdown