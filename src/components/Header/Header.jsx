import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={classes.header}>
        <img
            src='https://png.pngitem.com/pimgs/s/32-326322_linkedin-logo-white-letters-png-download-transparent-png.png'/>
        {/*https://c0.klipartz.com/pngpicture/358/320/gratis-png-testimonios-informaticos-iconos-cliente-prestashop-icono-mensaje-s-thumbnail.png*/}
        {/*https://c0.klipartz.com/pngpicture/463/152/gratis-png-iconos-informaticos-testimoniales-publicidad-promocion-servicio-comunicacion-thumbnail.png*/}
        {/* https://w7.pngwing.com/pngs/96/218/png-transparent-social-media-marketing-digital-marketing-person-information-support-team-logo-social-media-marketing-social-media.png*/}
        {/*https://c0.klipartz.com/pngpicture/358/320/gratis-png-testimonios-informaticos-iconos-cliente-prestashop-icono-mensaje-s-thumbnail.png*/}
        <div className={classes.login}>
            {props.isAuth ?
                <div>
                    {props.login} <button className={classes.logout_button} onClick={props.logout}>Log out</button>
                </div>
                : <NavLink
                    to={'/login'}
                    style={{textDecoration: 'none'}}>Login</NavLink>}
        </div>
    </header>
}

export default Header;