import axios from 'axios'

const baseUrl = 'https://fakestoreapi.com'
let currentUser: any;

export const userLogin = async (payload: {email: string, password: string}) => {
  try {
    const request = await axios.get(`${baseUrl}/users`)
    const response = request.data

    const user = response.filter((value: any) => value.email === payload.email && value.password === payload.password)
    currentUser = user[0]
    return user[0]
  } catch (error: any) {
    console.log(error)
  }

}

export const getCurrentUser = () => {
  return currentUser
}