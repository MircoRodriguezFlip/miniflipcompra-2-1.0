import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/logo.webp';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="contenido-footer">
                <section>
                    <div className="img-logo-footer">
                        <NavLink to="/" aria-label="Ir a la página de inicio">
                            <img src={LogoNavbar} alt="Logo de Compramos Casas en el pie de página" loading="lazy" decoding="async" />
                        </NavLink>
                    </div>
                </section>

                <section className="poli-copy light-text">
                    <p>© Flip Inmobiliaria</p>

                    <NavLink to="/politica-privacidad" title="Ver la política de privacidad">
                        Política de privacidad
                    </NavLink>
                </section>
            </div>
        </footer>
    );
};
