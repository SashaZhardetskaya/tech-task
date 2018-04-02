import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Header.scss';

const Header = () => {

    const links = [
        {path: '/about', text: 'How it works'},
        {path: '/calendar', text: 'Calendar'},
        {path: '/contacts', text: 'Contact us'},
        {path: 'https://drive.google.com/file/d/1dmMWGPdbzGA08w8JphOjx00gnkInwyH0/view?usp=sharing', text: 'Portfolio'}
    ];

    return (
        <div
            className='header__wrapper'
        >
            <div
                className='header__container'
            >
                <Link
                    className='user'
                    to='/contacts'
                >
                    <div className='logo'>
                        SZ
                    </div>
                    <div className='name'>
                        Sasha Zhardetskaya
                    </div>
                </Link>
                <ul
                    className='header__nav'
                >
                    {links.map(link => {
                        return <li
                            key={link.path}
                            className='header__nav-item'
                        >
                            {
                                link.path.startsWith('/') ?
                                    <NavLink
                                        activeClassName='activeLink'
                                        to={link.path}
                                    >{link.text}</NavLink> :
                                    <a href={link.path}>{link.text}</a>
                            }

                        </li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Header;