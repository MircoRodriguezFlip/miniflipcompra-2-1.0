import styles from '../../styles/modules/sectionLp1.module.css';

import { useState } from 'react';

import mascota from '../../assets/images/personaje-1.webp';

import { categorias } from '../utils/categoriasSectionLp1';

export const SectionLp1 = () => {
    const [textoActivo, setTextoActivo] = useState(null);

    const handleClick = (id) => {
        setTextoActivo((prev) => (prev === id ? null : id));
    };

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionHeader}>
                <h1 className="bebas-text">COMPRAMOS TU CASA</h1>
                <h2 className="light-text">Vende tu casa</h2>
            </header>

            <div className={styles.sectionContent1}>
                <div>
                    <p className="light-text">Rápido y seguro</p>
                    <p className="light-text">¡Déjalo en nuestras manos!</p>
                </div>

                <div className={styles.imagenMascota}>
                    <img src={mascota} alt="Personaje de Compramos Casas sosteniendo la llave de la Casa que quiere Vender" />
                </div>
            </div>

            <div className={styles.sectionContent2}>
                <h3 className="light-text">¿Qué tipo de casa quieres vender?</h3>

                <div className={`${styles.sectionContent2Cards} ${textoActivo ? styles.textoActivo : ''}`}>
                    {categorias.map((categoria) => (
                        <div key={categoria.id}>
                            <button
                                className={styles.sectionContent2Card}
                                onClick={() => handleClick(categoria.id)}
                                title={`Haz clic para saber qué es una casa ${categoria.titulo.toLowerCase()}`}
                            >
                                <img src={categoria.imagen} alt={categoria.titulo} />
                                <p className="light-text">{categoria.titulo}</p>
                            </button>

                            {textoActivo === categoria.id && (
                                <div className={styles.sectionCardsText}>
                                    <p className="light-text">{categoria.descripcion}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.sectionContent2Button}>
                    <button
                        className="bold-text"
                        onClick={() => document.querySelector('#section-3-lp')?.scrollIntoView({ behavior: 'smooth' })}
                        title="Haz clic para cotizar con un agente"
                    >
                        VENDE TU CASA
                    </button>
                </div>
            </div>
        </section>
    );
};
