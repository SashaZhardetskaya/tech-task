import React from 'react';
import {Link} from "react-router-dom";

// import grid from '../../styles/grid.css';
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
        <div
            className='wrapper'
        >
            <div
                className='container'
            >
                <div
                    className='justify'
                >
                    <div
                        className='copyright'
                    >© 2017 Something.</div>
                    <ul
                        className='navList'
                    >
                        {links.map((link, index) => {
                            return <li key={index}>
                                <Link to={link.path}>{link.text}</Link>
                            </li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;