import React, {useContext} from 'react'
import MyContext from './mycontext'

function Header() {
    const{selectedUser}=useContext(MyContext)
  return (
    <div> selectedUser {selectedUser} </div>
  )
}

export default Header