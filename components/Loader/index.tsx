import Image from "next/image";
import cn from "classnames";
import styles from "./Loader.module.sass";

type Props = {
    hidden: boolean;
};

const Loader = ({ hidden }: Props) => (
    <div className={cn(styles.loader, { [styles.hidden]: hidden })}>
        <div className={styles.logo}>
           <Image 
                src="/images/xora.svg"
                 width={324}
                height={56}
                alt="Xora"
            />
        </div>
        <div className={styles.circle}></div>
    </div>
);

export default Loader;
