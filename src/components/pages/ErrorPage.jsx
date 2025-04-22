import styles from '../../styles/modules/errorPage.module.css';

import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <main className="fade-in">
            <section className={styles.sectionContent}>
                <h1 className="bold-text">
                    Error 404 <br /> Página no encontrada
                </h1>

                <h2 className="light-text">Lo sentimos, la página que estás buscando no existe.</h2>

                <NavLink to="/" aria-label="Ir a la página de inicio.">
                    <button className="botonForm bold-text" title="Haz clic para ir a la página de inicio">
                        IR AL INICIO
                    </button>
                </NavLink>
            </section>
        </main>
    );
};

export default ErrorPage;
