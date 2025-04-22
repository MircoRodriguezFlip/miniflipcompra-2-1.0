import styles from '../../styles/modules/sectionLp3.module.css';

import { Form } from './Form';

import imgMascotaLp from '../../assets/images/personaje-2.webp';

export const SectionLp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionHeader}>
                <h2 className="bold-text">Contáctanos</h2>
                <h3 className="light-text">Déjanos tus datos y nos comunicaremos contigo a la brevedad</h3>
            </header>

            <div className={styles.sectionContent1}>
                <img src={imgMascotaLp} alt="Personaje de Compramos tu Casa anotando tus datos en una plantilla" loading="lazy" decoding="async" />

                <Form />
            </div>
        </section>
    );
};
