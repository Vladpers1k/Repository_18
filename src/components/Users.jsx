import React from 'react'
import { useSelector } from 'react-redux'
import UserList from './Nested/UserList'

const Users = () => {
  const users = useSelector((state) => state.users)

  return (
    <div className="users-page">
      <h2>Users Page</h2>
      <UserList users={users} />
    </div>
  )
}

export default Users
