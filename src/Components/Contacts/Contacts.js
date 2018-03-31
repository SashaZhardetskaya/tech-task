import React from 'react';
import {Link} from "react-router-dom";

import ico1 from "../../Images/contacts/ico1.svg";
import ico2 from "../../Images/contacts/ico2.svg";
import ico3 from "../../Images/contacts/ico3.svg";
import ico4 from "../../Images/contacts/ico4.svg";
import ico5 from "../../Images/contacts/ico5.svg";

const Contacts = () => {

    const contactsData = [
        {
            path: '/about',
            text: 'Twitter',
            image: ico1,
            color: '#eee'
        },
        {
            path: '/calendar',
            image: ico2,
            text: 'Email'
        },
        {
            path: 'https://drive.google.com/file/d/1dmMWGPdbzGA08w8JphOjx00gnkInwyH0/view?usp=sharing',
            text: 'Facebook',
            image: ico3,
        },
        {
            path: 'https://drive.google.com/file/d/1dmMWGPdbzGA08w8JphOjx00gnkInwyH0/view?usp=sharing',
            text: 'Linkedin',
            image: ico4,
        },
        {
            path: 'https://github.com/SashaZhardetskaya',
            text: 'Github',
            image: ico5,
        }
    ];

    return (
        <div>
            <div
                // className={grid.container}
            >
                <ul>
                    {contactsData.map(link => {
                        return (
                            <li key={link.path}>
                                <a href={link.path}>{link.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Contacts;