import Head from 'next/head';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import ProductFeed from '../Components/ProductFeed';
import axios from 'axios';

export default function index({ products }) {
  return (
  <>
    <Head>
      <title>Amazon Clone</title>
    </Head>
    <Header />    
    <main className='max-w-screen-2xl mx-auto my-auto'>
      <Banner />
      <ProductFeed products={products} />
    </main>
  </>
  )
}

export async function getServerSideProps(context){
  
  const products = await axios.get('http://localhost:3000/api/products')
  .then(res => res.json());

  return {
    props:{
      products,
    }
  }
}