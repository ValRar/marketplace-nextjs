import styles from "../src/styles/Properties.module.css"

const Properties = ({data}) => {
    return (
        <section className={styles.wrapper}>
            {data.map(({title, content}) => (
                <div className={styles.propertiesRow} key={title}>
                    <h3>{title}:</h3>
                    <span>{content}</span>
                </div>

            ))}
        </section>
    )
}

export default Properties