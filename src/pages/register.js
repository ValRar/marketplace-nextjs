import Link from "next/link"
import styles from "../styles/Register.module.css"
const Register = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <h1 className={styles.title}>Регистрация</h1>
                <form target="/">
                    <input type="text" placeholder="Имя пользователя" className={styles.input}></input>
                    <input type="password" placeholder="Пароль" className={styles.input}></input>
                    <input type="submit" className={styles.registerBtn} value="Зарегистрироваться"></input>
                </form>
                <Link href="/login" className={styles.link}>Или выполнить вход</Link>
            </div>
        </div>
    )
}

export default Register