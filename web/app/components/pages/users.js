import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {GetUsers} from '../../redux/actions'


const Users = () => {
  const dispatch = useDispatch()
  const {users, loading, error} = useSelector(state => state)

  useEffect(() => {
    dispatch(GetUsers())
  }, [])


  const tableOfUsers = users.map(user => {
    return (
      <tr key={user.id}>
        <td>
            <Link to={`/users/${user.id}`}>{user.email} </Link>
        </td>   
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
      </tr>
    )
  })

  return (
    <div>
      <table>
        <thead>
          <tr key="header">
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {loading ? 
            <tr key="loading"><td>...loading</td></tr> : 
            error ? <tr key="error"><td>something went wrong</td></tr> :
            tableOfUsers
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users
