import Cookies from "js-cookie"
import styles from "../styles/Register.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

const Login = () => {

    const router = useRouter()

    async function submitHandler() {
        const emailInput = document.getElementById("emailInput")
        const passwordInput = document.getElementById("passwordInput")
        const errorMessage = document.getElementsByClassName(styles.error)[0]
        const res = await fetch("http://localhost:3000/api/auth/get", {method: "POST", body: JSON.stringify({email: emailInput.value, password: passwordInput.value})})
        if (res.status === 200) {
            const json = await res.json()
            console.log(json)
            Cookies.set("authToken", json.token)
            router.push("../")
        } else {
            errorMessage.style.display = "block"
        }
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <h1 className={styles.title}>Вход</h1>
                <input type="text" placeholder="Имя пользователя" className={styles.input} id="emailInput"></input>
                <input type="password" placeholder="Пароль" className={styles.input} id="passwordInput"></input>
                <input type="submit" className={styles.loginBtn} value="Войти" onClick={submitHandler}></input>
                <div className={styles.error}>Некорректный логин или пароль</div>
                <Link href="/register" className={styles.link}>Или зарегистрироваться</Link>
            </div>
        </div>
    )
}

export default Login