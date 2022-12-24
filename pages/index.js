import Head from "next/head";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ProductFeed from "../Components/ProductFeed";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function index() {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Amazon Clone</title>
        </Head>
        <Header />
        <main className="max-w-screen-2xl mx-auto my-auto">
          <Banner />
          <ProductFeed />
        </main>
      </Provider>
    </>
  );
}
