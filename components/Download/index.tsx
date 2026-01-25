"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./Download.module.sass";
import Container from "../Container";
import Logo from "../Logo";
import { logos, links } from "@/constants/download";
import { Element } from "react-scroll";

type Props = {};

const Download = ({ }: Props) => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        description: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({
                    type: "success",
                    text: "Obrigado! Entrarei em contato em breve.",
                });
                setFormData({ name: "", company: "", email: "", description: "" });
            } else {
                setMessage({
                    type: "error",
                    text: data.error || "Erro ao enviar mensagem. Tente novamente.",
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Erro ao enviar mensagem. Tente novamente mais tarde.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Element className={styles.download} name="download">
            <Container>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.logo}>
                            <Image
                                src="/images/xora.svg"
                                width={162}
                                height={56}
                                alt="Xora"
                            />
                        </div>
                        <div className={styles.text}>
                            Interessado neste projeto? &nbsp;
                            Preencha o formulário abaixo e entrarei em contato.
                        </div>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nome"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder="Empresa (opcional)"
                                value={formData.company}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="description"
                                placeholder="Mensagem"
                                rows={4}
                                value={formData.description}
                                onChange={handleChange}
                            />
                            {message && (
                                <div
                                    style={{
                                        padding: "12px",
                                        marginBottom: "16px",
                                        borderRadius: "4px",
                                        backgroundColor:
                                            message.type === "success"
                                                ? "rgba(76, 175, 80, 0.1)"
                                                : "rgba(244, 67, 54, 0.1)",
                                        color:
                                            message.type === "success"
                                                ? "#4caf50"
                                                : "#f44336",
                                        border: `1px solid ${message.type === "success"
                                            ? "#4caf50"
                                            : "#f44336"
                                            }`,
                                    }}
                                >
                                    {message.text}
                                </div>
                            )}
                            <div className={styles.actions}>
                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={isLoading}
                                >
                                    <span>
                                        {isLoading
                                            ? "Enviando..."
                                            : "Enviar Mensagem"}
                                    </span>
                                </button>
                                <a
                                    className={styles.whatsapp}
                                    href="mailto:your.email@example.com"
                                >
                                    📧 Enviar e-mail
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.preview}>
                            <div className={styles.screen}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <Image
                                    src="/images/screen.png"
                                    width={856}
                                    height={654}
                                    alt="Screen"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <ul className={styles.logos}>
                    {logos.map((logo) => {
                        const needsScale =
                            logo.url.includes('amplitude.svg');

                        return (
                            <li key={logo.id}>
                                <Logo
                                    src={logo.url}
                                    alt={logo.title}
                                    visualHeight={56}
                                    scale={needsScale ? 1.4 : 1}
                                />
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </Element>
    );
};

export default Download;
