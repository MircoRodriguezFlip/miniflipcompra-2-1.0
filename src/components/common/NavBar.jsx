import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/logo-text.webp';
import LogoNavbar2 from '../../assets/images/logo-flip.webp';

export const NavBar = () => {
    return (
        <header>
            <nav className="navbar" aria-label="Menú de navegación principal">
                <NavLink to="/" aria-label="Ir a la página principal">
                    <img src={LogoNavbar} alt="Logotipo de Compramos Casas" className="logo-navbar" />
                </NavLink>

                <img src={LogoNavbar2} alt="Logotipo de Flip inmobiliaria" className="logo-navbar-2" />
            </nav>
        </header>
    );
};
