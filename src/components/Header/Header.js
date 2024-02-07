import { NavLink } from'react-router-dom';
import { stack as Menu } from 'react-burger-menu'

import './Header.scss'

function Header () {
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="header__wrapper-logo">
                    <NavLink exact to="/" className="header__wrapper-logo">
                        <span><h1 className="header__wrapper-logo-news">News</h1><h1 className="header__wrapper-logo-portal">Portal</h1></span>
                    </NavLink>
                </div>
                <Menu right>
                    <NavLink to="/politics" className="menu-item">Politics</NavLink>
                    <NavLink to="/sport" className="menu-item">Sport</NavLink>
                    <NavLink to="/media" className="menu-item">Media</NavLink>
                    <NavLink to="/economy" className="menu-item">Economy</NavLink>
                </Menu>
            </div>
            
        </div>
    );
}

export default Header;