import Icon from "../Icon";
import styles from "./Subscribe.module.sass";

type Props = {};

const Subscribe = () => {
    return (
        <div className={styles.subscribe}>
            <h2 className={styles.title}>Projeto de Portfólio</h2>
            <p className={styles.text}>
                Showcase de desenvolvimento web moderno
            </p>
        </div>
    );
};

export default Subscribe;
