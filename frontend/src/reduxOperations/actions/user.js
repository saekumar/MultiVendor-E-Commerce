import axios from 'axios'
import {
  LoadUserRequest,
  LoadUserFail,
  LoadUserSuccess,
} from '../reducers/user'

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(LoadUserRequest)

    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    })

    dispatch(LoadUserSuccess(data.user))
  } catch (error) {
    dispatch(
      LoadUserFail(error?.response?.data?.message || 'Somethig went wrong!')
    )
  }
}
