import Cookies from "js-cookie";
import styles from "../styles/Cart.module.css";
import { getInfo } from "./api/cart/getInfo";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const authToken = context.req.cookies["authToken"];
  if (!authToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
      props: {},
    };
  }
  const cart = await getInfo(authToken);
  if (cart) {
    return {
      props: { cart: JSON.stringify(cart) },
    };
  } else {
    return {
      props: { cart: "[]" }
    }
  }
  
}

const Cart = ({ cart }) => {

  const router = useRouter()

  return (
    <div className={styles.wrapper}>
      <h1>Корзина</h1>
      <div className={styles.headersWrapper}>
        <h2 className={styles.header}>Название товара</h2>
        <h2 className={styles.header}>Цена</h2>
      </div>
      {JSON.parse(cart).map(({ title, img, price, id }) => (
        <section className={styles.productWrapper} key={id}>
          <div className={styles.imgWrapper}>
            <img alt="image" src={JSON.parse(img)[0]}></img>
            <h3>{title}</h3>
          </div>
          <div className={styles.imgWrapper}>
            <h2 className={styles.price}>{price}р</h2>
            <button className={styles.delButton} onClick={async () => {
              const session_id = Cookies.get("authToken")
              await fetch("/api/cart/delete", {method: "POST", body: JSON.stringify({product: id, session: session_id})})
              router.reload()
            }}></button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Cart;
