import React, { useState } from 'react' // Add useState import
import { useSelector, useDispatch } from 'react-redux' // Add useDispatch import
import UserList from './Nested/UserList'
import { addUser, removeUser } from '../store/usersSlice'

const Users = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const [newUser, setNewUser] = useState('')

  const handleAddUser = () => {
    if (newUser) {
      dispatch(addUser({ id: Date.now(), name: newUser }))
      setNewUser('')
    }
  }

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id))
  }

  return (
    <div className="users-page">
      <h2>Users Page</h2>
      <UserList users={users} />
      <input type="text" value={newUser} onChange={(e) => setNewUser(e.target.value)} placeholder="Add new user" />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
