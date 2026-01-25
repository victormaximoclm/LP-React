import { Element } from "react-scroll";
import styles from "./Hero.module.sass";
import Container from "../Container";
import Caption from "../Caption";
import Button from "../Button";
import Image from "next/image";

type Props = {
    onLoadindComplete: () => void;
};

const Hero = ({ onLoadindComplete }: Props) => {
    return (
        <Element className={styles.hero} name="home">
            <Container>
                <div className={styles.inner}>
                    <Caption className={styles.caption}>Projeto de Portfólio</Caption>
                    <h2 className={styles.title}>Landing Page Moderna Desenvolvida com Next.js</h2>
                    <p className={styles.text}>
                        Um showcase de desenvolvimento web moderno usando Next.js, React, TypeScript e Sass. Demonstra design responsivo, animações suaves e melhores práticas.
                    </p>
                    <Button
                        icon="zap-fast"
                        href="#download"
                    >
                        Começar
                    </Button>
                </div>
                <div className={styles.preview}>
                    <Image
                        src="/images/hero.png"
                        width={1230}
                        height={1230}
                        quality={100}
                        priority
                        loading="eager"
                        onLoadingComplete={onLoadindComplete}
                        alt="Hero"
                    />
                </div>
            </Container>
        </Element>
    );
};

export default Hero;
