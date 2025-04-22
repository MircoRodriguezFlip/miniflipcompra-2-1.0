import styles from '../../styles/modules/politicasPage.module.css';

import { NavLink } from 'react-router-dom';

const FLIP_LINK = (
    <NavLink to="/" title="ir a www.venderunacasa.com.mx">
        venderunacasa
    </NavLink>
);

const PoliticasPage = () => {
    return (
        <main className={styles.politicasContainer}>
            <header className={`${styles.politicasTitulo} bold-text`}>
                <h1>Política de Privacidad</h1>
                <h2>venderunacasa.com.mx</h2>
                <h3>[21/04/25]</h3>
            </header>

            <section className={`${styles.politicasContenido} light-text `}>
                <p>
                    En {FLIP_LINK} nos preocupamos por tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información
                    cuando visitas y utilizas nuestro sitio web {FLIP_LINK}.
                </p>

                <p>
                    Recopilamos información cuando usas nuestros servicios en {FLIP_LINK}, como tus datos de contacto (nombre, correo electrónico y
                    teléfono), detalles sobre las propiedades que deseas vender, y datos técnicos de navegación, como tu dirección IP y las páginas
                    que visitas en {FLIP_LINK}.
                </p>

                <p>
                    Usamos esta información para ofrecerte nuestros servicios de compra de casas en Monterrey, comunicarnos contigo sobre las
                    propiedades que deseas vender y mejorar tu experiencia en {FLIP_LINK}.
                </p>

                <p>
                    No vendemos ni compartimos tu información personal, salvo con proveedores de servicios que nos ayudan a operar {FLIP_LINK}, o
                    cuando la ley lo exige o en respuesta a un proceso legal válido.
                </p>

                <p>
                    Protegemos tu información con medidas de seguridad adecuadas para evitar accesos no autorizados. Puedes acceder, corregir o
                    eliminar tu información personal cuando lo desees, contactándonos en {FLIP_LINK}.
                </p>

                <p>
                    {FLIP_LINK} utiliza cookies para mejorar tu experiencia de navegación. Puedes desactivarlas desde la configuración de tu
                    navegador, aunque esto podría afectar algunas funciones del sitio {FLIP_LINK}.
                </p>

                <p>Podemos actualizar esta política en cualquier momento. Cualquier cambio será publicado en {FLIP_LINK}.</p>

                <p>Si tienes preguntas sobre esta política de privacidad, no dudes en contactarnos a través de {FLIP_LINK}.</p>
            </section>
        </main>
    );
};

export default PoliticasPage;
