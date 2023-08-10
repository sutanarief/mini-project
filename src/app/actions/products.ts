import axios from 'axios'

const baseUrl = 'https://fakestoreapi.com'

type IParams = {
  productId: string
}

export const getProducts = async () => {
  try {
    let request = await axios.get(`${baseUrl}/products`)
    const response = request.data
    return response

  } catch (error) {
    console.log(error)
  }

}

export const getProductById = async (params: IParams) => {
  const { productId } = params
  try {
    let request = await axios.get(`${baseUrl}/products/${productId}`)
    const response = request.data
    return response
  } catch (error) {
    console.log(error)
  }
}