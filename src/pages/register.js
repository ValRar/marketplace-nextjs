import Link from "next/link"
import styles from "../styles/Register.module.css"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
const Register = () => {

    const router = useRouter()

    async function submitHandler() {
        const emailInput = document.getElementById("emailInput")
        const errorMessage = document.getElementsByClassName(styles.error)[0]
        const passwordInput = document.getElementById("passwordInput")
        console.log(JSON.stringify({email: emailInput.value, password: passwordInput.value}))
        const res = await fetch("http://localhost:3000/api/auth/set", {method: "POST", body: JSON.stringify({email: emailInput.value, password: passwordInput.value})})
        if (res.status === 200) {
            const json = await res.json()
            Cookies.set("authToken", json.token)
            router.push("../")
        } else {
            errorMessage.style.display = "block"
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <h1 className={styles.title}>Регистрация</h1>
                <input type="text" placeholder="Имя пользователя" className={styles.input} id="emailInput"></input>
                <input type="password" placeholder="Пароль" className={styles.input} id="passwordInput"></input>
                <input type="submit" className={styles.registerBtn} value="Зарегистрироваться" onClick={submitHandler}></input>
                <div className={styles.error}>Некорректный логин или пароль</div>
                <Link href="/login" className={styles.link}>Или выполнить вход</Link>
            </div>
        </div>
    )
}

export default Register