import styles from "../styles/Admin.module.css"

const Dashboard = () => {

    async function handleSubmit(event) {
        const button = event.currentTarget
        button.setAttribute("disabled", "")
        const name = document.getElementById("name")
        const amount = document.getElementById("amount")
        const price = document.getElementById("price")
        const info = document.getElementById("info")
        const imageInputs = document.getElementsByClassName("image-input")
        const properties = document.getElementById("properties")

        const images = []
        for (let i = 0; i < imageInputs.length; i++) {
            if (imageInputs[i].value.trim() !== "") images.push(imageInputs[i].value)
        }
        const requestBody = {
            name: name.value,
            amount: amount.value,
            price: price.value,
            info: info.value,
            images: images,
            properties: properties.value
        }
        const response = await fetch("../api/admin/addProduct", {body: JSON.stringify(requestBody), method: "POST"})
        if (response.status === 200) alert("Успешно!")
        else if (response.status === 400) alert("Введите все значения!")
        else if (response.status === 500) alert("Произошла неизвестная ошибка!")
        button.removeAttribute("disabled")
    }
    
    function createInput() {
        const element = document.createElement("input")
        element.type = "text"
        element.className = "image-input"
        element.placeholder = "Ссылка на изображение"
        return element
    }

    return (
        <>
        <section className={styles.wrapper}>
            <h1>Добавить товар</h1>
            <input type="text" placeholder="Название" id="name"></input>
            <input type="number" placeholder="Количество" id="amount"></input>
            <input type="number" placeholder="Цена" id="price"></input>
            <textarea placeholder="Описание товара" id="info"></textarea>
            <div id="imageRoot">
                <input type="text" className="image-input" placeholder="Ссылка на изображение"></input>
            </div>
            <button onClick={() => {
                const root = document.getElementById("imageRoot")
                root.appendChild(createInput())
            }}>Добавить изображение</button>
            <textarea placeholder="Характеристики: Ключ:Значение, Ключ:Значение" id="properties"></textarea>

            <button onClick={handleSubmit}>Добавить</button>
        </section>
        </>
    )
}

export default Dashboard