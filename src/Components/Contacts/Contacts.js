import React from 'react';
import {Link} from "react-router-dom";

import ico1 from "../../Images/contacts/ico1.svg";
import ico2 from "../../Images/contacts/ico2.svg";
import ico3 from "../../Images/contacts/ico3.svg";
import ico4 from "../../Images/contacts/ico4.svg";
import ico5 from "../../Images/contacts/ico5.svg";

import arrowDown from "../../Images/commons/arrow_icon.svg";
import './Contacts.scss'

const Contacts = () => {

    const contactsData = [
        {
            path: 'https://twitter.com/?lang=ru',
            text: 'Twitter',
            image: ico1,
            color: '#00abef'
        },
        {
            path: 'mailto:sasha310209@gmail.com',
            text: 'Email',
            image: ico2,
            color: '#ff133b'
        },
        {
            path: 'https://www.facebook.com/SashaZhar',
            text: 'Facebook',
            image: ico3,
            color: '#2360b7'
        },
        {
            path: 'https://drive.google.com/file/d/1dmMWGPdbzGA08w8JphOjx00gnkInwyH0/view?usp=sharing',
            text: 'Linkedin',
            image: ico4,
            color: '#223c81'
        },
        {
            path: 'https://github.com/SashaZhardetskaya',
            text: 'Github',
            image: ico5,
            color: '#fff'
        }
    ];

    return (
        <div className='content-wrapper'>
            <h2 className='main-title'>
                Contact us
            </h2>
            <ul className='about__list'>
                {contactsData.map(link => {
                    return (
                        <li
                            key={link.path}
                            className={`about__card`}
                        >
                            <a href={link.path}>{link.text}</a>
                            <div
                                className='about__collapsed-card'
                                // onClick={() => this.handleActiveOpenAcc(index)}
                            >
                                <div
                                    className='about__icon'
                                    style={{backgroundColor: link.color}}
                                >
                                    <img src={link.image} alt={link.text}/>
                                </div>
                                <img
                                    // className={`arrow-icon ${this.state.currentOpenAccIndex.indexOf(index) > -1 && 'open'}`}
                                    src={arrowDown}
                                    alt="arrow"
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Contacts;