import styles from "../styles/Register.module.css"
import Link from "next/link"

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <h1 className={styles.title}>Вход</h1>
                <form target="/">
                    <input type="text" placeholder="Имя пользователя" className={styles.input}></input>
                    <input type="password" placeholder="Пароль" className={styles.input}></input>
                    <input type="submit" className={styles.loginBtn} value="Войти"></input>
                </form>
                <Link href="/register" className={styles.link}>Или зарегистрироваться</Link>
            </div>
        </div>
    )
}

export default Login