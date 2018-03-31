import React from 'react';
import {Link} from "react-router-dom";

import './Header.scss';
// import grid from '../../styles/grid.css';

const Header = () => {

    const links = [
        {path: '/about', text: 'How it works'},
        {path: '/calendar', text: 'Calendar'},
        {path: '/contacts', text: 'Contact us'},
        {path: 'https://drive.google.com/file/d/1dmMWGPdbzGA08w8JphOjx00gnkInwyH0/view?usp=sharing', text: 'Portfolio'}
    ];

    return (
        <div
            className='wrapper'
        >
            <div
                // className={grid.container}
            >
                <div
                    className='justify'
                >
                    <Link
                        className='user'
                        to={'/contacts'}
                    >
                        <div
                            className='logo'
                        >
                            SZ
                        </div>
                        <div
                            className='name'
                        >Sasha Zhardetskaya</div>
                    </Link>
                    <ul
                        className='navList'
                    >
                        {links.map(link => {
                            return <li key={link.path}>
                                {
                                    link.path.startsWith('/') ?
                                        <Link
                                            activeClassName='activeLink'
                                            to={link.path}
                                        >{link.text}</Link> :
                                        <a href={link.path}>{link.text}</a>
                                }

                            </li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;