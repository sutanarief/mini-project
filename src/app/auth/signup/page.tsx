import Container from '@/components/Container';
import React from 'react';
import SignupClient from './SignupClient';

type pageProps = {
  
};

const page:React.FC<pageProps> = () => {
  
  return (
    <Container>
      <SignupClient />
    </Container>
  )
}
export default page;