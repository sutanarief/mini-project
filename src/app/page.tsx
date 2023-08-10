import Container from '@/components/Container'
import { getCategories } from './actions/categories'
import HomePage from '@/components/HomePage'

export default async function Home() {
  const categories = await getCategories()

  return (
    <Container>
      <div
        className={`
          flex          
          p-10
          `}
      >
        <HomePage categories={categories}/>
      </div>
    </Container>
  )
}
