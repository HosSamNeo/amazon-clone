import Head from 'next/head';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import ProductFeed from '../Components/ProductFeed';

const index = () => {
  return (
  <>
    <Head>
      <title>Amazon Clone</title>
    </Head>
    <Header />    
    <main className='max-w-screen-2xl mx-auto'>
      <Banner />
      <ProductFeed />
    </main>
  </>
  )
}

export default index