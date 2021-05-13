import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {GetUserById} from '../../redux/actions'

const UserById = () => {
  const dispatch = useDispatch();
  const {userById: {id, email, first_name, last_name, favorite_color, number_of_pets}, loading, error} = useSelector(state => state)
  const { userid } = useParams()

  useEffect(() => {
    dispatch(GetUserById(userid))
  }, [])


  return (
    <div>
      {loading ? <h4>...loading</h4> :
        error ? <h4>something went wrong</h4> :
        <>
          <h4>Id</h4>
          <p>{id}</p>
          <h4>Email</h4>
          <p>{email}</p>
          <h4>First Name</h4>
          <p>{first_name}</p>
          <h4>Last Name</h4>
          <p>{last_name}</p>
          <h4>Favorite Color</h4>
          <p>{favorite_color}</p>
          <h4>Number of Pets</h4>
          <p>{number_of_pets}</p>
        </>
      }
    </div>
  )
}

export default UserById
