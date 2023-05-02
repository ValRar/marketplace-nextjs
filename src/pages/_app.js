import '@/styles/globals.css'
import Footer from '../../components/footer'
import Header from '../../components/header'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <div id='up'></div>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}
