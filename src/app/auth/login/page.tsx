import Container from '@/components/Container';
import React from 'react';
import LoginClient from './LoginClient';

type pageProps = {
  
};

const page:React.FC<pageProps> = () => {
  
  return (
    <Container>
      <LoginClient />
    </Container>
  )
}
export default page;