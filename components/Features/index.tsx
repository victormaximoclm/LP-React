import { Element } from "react-scroll";
import styles from "./Features.module.sass";
import Container from "../Container";
import Icon from "../Icon";
import { details, features } from "@/constants/features";

type Props = {};

const Features = ({}: Props) => {
    return (
        <Element name="features">
            <Container>
                <div className={styles.features}>
                    {features.map((feature) => (
                        <div 
                            className={`${styles.feature} ${feature.id === "2" ? styles.featureCenter : ""}`} 
                            key={feature.id}
                        >
                            <div className={styles.preview}>
                                <span className="icon-frame"></span>
                                {feature.icon}
                            </div>
                            <h2 className={styles.title}>{feature.title}</h2>
                            <div className={styles.text}>{feature.text}</div>
                        </div>
                    ))}
                    <ul className={styles.details}>
                        {details.map((detail) => (
                            <li key={detail.id}>
                                <div className={styles.icon}>
                                    <Icon name={detail.icon} />
                                </div>
                                <h3 className={styles.subtitle}>
                                    {detail.title}
                                </h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </Element>
    );
};

export default Features;
