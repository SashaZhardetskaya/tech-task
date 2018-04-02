import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.scss';

const Footer = () => {

    const links = [
        {path: '/terms', text: 'Terms'},
        {path: '/privacy', text: 'Privacy'},
        {path: '/security', text: 'Security'},
        {path: '/status', text: 'Status'},
        {path: '/help', text: 'Help'},
        {path: '/contacts', text: 'Contact'}
    ];

    return (
        <div className='footer__wrapper'>
            <div className='footer__container'>
                <div className='copyright'>
                    © 2017 Something.
                </div>
                <ul className='footer__nav'>
                    {links.map((link, index) => {
                        return (
                            <li
                                className='footer__nav-item'
                                key={index}
                            >
                                <NavLink to={link.path}>
                                    {link.text}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Footer;