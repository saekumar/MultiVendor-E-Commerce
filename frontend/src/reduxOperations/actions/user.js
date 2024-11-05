import axios from 'axios'
import {
  LoadUserRequest,
  LoadUserFail,
  LoadUserSuccess,
} from '../reducers/user'
import { server } from '../../server'
export const loadUser = () => async (dispatch) => {
  try {
    console.log('okayyy')
    dispatch(LoadUserRequest())
    console.log('again okay')

    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    })
    console.log(data)

    dispatch(LoadUserSuccess(data.user))
  } catch (error) {
    dispatch(
      LoadUserFail(error?.response?.data?.message || 'Somethig went wrong!')
    )
  }
}
