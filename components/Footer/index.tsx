import { Link as LinkScroll } from "react-scroll";
import styles from "./Footer.module.sass";
import Container from "../Container";
import Subscribe from "../Subscribe";
import { navigation } from "@/constants/navigation";
import Socials from "../Socials";
import Image from "next/image";

type Props = {};

const Footer = ({}: Props) => {
    return (
        <div className={styles.footer}>
            <Container className={styles.container}>
                <div className={styles.col}>
                    <div className={styles.logo}>
                        <Image src="/images/xora.svg" alt="Logo" width={40} height={40} />
                    </div>
                    <nav className={styles.nav}>
                        <ul>
                            {navigation.map((link) => (
                                <li key={link.id}>
                                    {link.url ? (
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.title}
                                        </a>
                                    ) : (
                                        <LinkScroll
                                            to={link.element}
                                            offset={link.offset}
                                        >
                                            {link.title}
                                        </LinkScroll>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.bottom}>
                        
                        <ul className={styles.legal}>
                            <li>
                                <a href="#">
                                    Política de privacidade
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Termos de serviço
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.col}>
                    <Subscribe />
                    <Socials className={styles.socials} />
                    <div className={styles.copyright}>
                        © {new Date().getFullYear()} Projeto de Portfólio - Todos os direitos reservados.
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
