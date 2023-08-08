import AuthButton from '@/components/AuthButton'
import Container from '@/components/Container'
import Image from 'next/image'

export default function Home() {
  const user = false
  return (
    <Container>
      <div
        className={`
          w-screen
          h-screen
          bg-gray-800
          flex
          p-20

          `}
      >
        {!user && <AuthButton />}
      </div>
    </Container>
  )
}
