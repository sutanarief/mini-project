import axios from 'axios'

const baseUrl = 'https://fakestoreapi.com'

export const getCategories = async () => {
  try {
    let request = await axios.get(`${baseUrl}/products/categories`)
    const response = request.data
    let allCategories: { category: string; totalItem: string }[] = []

    const categories = await Promise.all(response.map(async (category: string) => {
      const request = await axios.get(`${baseUrl}/products/category/${category}`)
      const totalItem = request.data.length

      allCategories.push({category, totalItem : `${String(totalItem)} Products`})
    }))

    return allCategories

  } catch (error: any) {
    console.log(error)
  }

}