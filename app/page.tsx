"use client";
import Outer from "@/components/Outer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

export default function Home() {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Timeout de segurança para garantir que o loader desapareça
        // mesmo se a imagem não carregar (ex: quando scroll está para baixo)
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 segundos de timeout

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <Loader hidden={!loading} />
            <Outer>
                <Header />
                <Hero onLoadindComplete={() => setLoading(false)} />
                <Features />
                <Pricing />
                <Faq />
                <Testimonials />
                <Download />
                <Footer />
            </Outer>
        </>
    );
}
