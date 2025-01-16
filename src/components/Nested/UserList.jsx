import React from 'react'

const UserList = ({ users }) => {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserList
