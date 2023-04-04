import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Card from '../../components/card'

export async function getServerSideProps(context) {
  const productsRequest = await fetch("http://localhost:3000/api/getProducts")
  const res = await productsRequest.json()

  return { props: {res} }
}

export default function Home({ res }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.featuredWrapper}>
        <div className={styles.featured1}>
          <img src='Featured-1.png'></img>
          <span className={styles.featuredSpan}>На дни рождения</span>
        </div>
        <div className={styles.featuredSecondWrapper}>
          <div className={styles.featuredThirdWrapper}>
            <div className={styles.featured2}>
              <span className={styles.featuredSpan}>Детям</span>
              <img src='Featured-2.png'></img>
            </div>
            <div className={styles.featured3}>
              <span className={styles.featuredSpan}>На свадьбу</span>
              <img src='Featured-3.png'></img>
            </div>
          </div>
          <div className={styles.featured4}>
            <span className={styles.featuredSpan}>На новый год</span>
            <img src='Featured-4.png'></img>
          </div>
        </div>
      </div>
      <h1 className={styles.title}>Популярные товары</h1>
      <div className={styles.cardsWrapper}>
        {res.map(({id, title, amount, rating, price, img}) => (
          <Card key={id} title={title} amount={amount} rating={rating} imagePath={img} price={price}></Card>
        ))}
      </div>
      {/* https://cdn1.ozone.ru/s3/multimedia-q/wc1000/6268104842.jpg */}
    </>
  )
}
