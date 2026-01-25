import { Element } from "react-scroll";
import styles from "./Faq.module.sass";
import Container from "../Container";
import Item from "./Item";
import { faq } from "@/constants/faq";
import Image from "next/image";

type Props = {};

const Faq = ({}: Props) => {
    const halfLength = Math.floor(faq.length / 2);

    return (
        <Element className={styles.faq} name="faq">
            <div className={styles.head}>
                <Container className={styles.container}>
                    <h2 className={styles.title}>
                        Perguntas Frequentes
                    </h2>
                    <p className={styles.text}>
                        Encontre respostas para as principais dúvidas sobre este projeto.
                    </p>
                </Container>
                <div className={styles.line}></div>
            </div>
            <div className={styles.inner}>
                <Container className={styles.row}>
                    <div className={styles.col}>
                        {faq.slice(0, halfLength).map((item, index) => (
                            <Item item={item} index={index + 1} key={item.id} />
                        ))}
                        <div className={styles.logo}>
                            <Image src="/images/xora.svg" alt="Logo" width={40} height={40} />
                        </div>
                    </div>
                    <div className={styles.col}>
                        {faq.slice(halfLength).map((item, index) => (
                            <Item
                                item={item}
                                index={index + 1 + halfLength}
                                key={item.id}
                            />
                        ))}
                    </div>
                </Container>
                <div className={styles.line}></div>
            </div>
        </Element>
    );
};

export default Faq;
