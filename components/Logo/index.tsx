"use client";
import Image from "next/image";
import styles from "./Logo.module.sass";

type LogoProps = {
    src: string;
    alt?: string;
    visualHeight?: number;
    scale?: number;
};

const Logo = ({ 
    src, 
    alt = "", 
    visualHeight = 56,
    scale = 1
}: LogoProps) => {
    return (
        <div 
            className={styles.logoContainer}
            style={{ height: `${visualHeight}px` }}
        >
            <Image
                src={src}
                alt={alt}
                width={200}
                height={visualHeight}
                className={styles.logoImage}
                style={{
                    transform: scale !== 1 ? `scale(${scale})` : undefined,
                }}
            />
        </div>
    );
};

export default Logo;
