import React, {Component} from "react";
import {Link} from "react-router-dom";
// import PropTypes from "prop-types";
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
// import userImage from "../../assets/128x128.jpg";
import ico1 from "../../Images/readme/ico1.svg";
import ico2 from "../../Images/readme/ico2.svg";
import ico3 from "../../Images/readme/ico3.svg";
import ico4 from "../../Images/readme/ico4.svg";

const listContent = [
    {
        image: ico1,
        color: '#1367d7',
        text: 'How to Setup'
    },
    {
        image: ico2,
        color: '#23b1e7',
        text: 'How to Run App'
    },
    {
        image: ico3,
        color: '#00c2a5',
        text: 'Standard Compliant'
    },
    {
        image: ico4,
        color: '#ecbf00',
        text: 'Secrets'
    }
];

class About extends Component {

    //Renders

    render() {
        return (
            <div>



                <ul>
                    {
                        listContent.map((item, index) => {
                            return (
                                <li>
                                    <div
                                        style={{backgroundColor: item.color}}
                                    >
                                        <img src={item.image} alt={item.text}/>
                                    </div>
                                    <p>{item.text}</p>
                                    <i>sdcsd</i>
                                </li>
                            )
                        })
                    }
                </ul>

                <SlideDown className='my-dropdown-slidedown'>
                    {
                        // (item.expanded && item.items) &&
                        // this.renderCategorySubItems(`${catId}_${index}`, item.items)
                    }
                </SlideDown>
            </div>
        );
    }

}

// Sidebar.propTypes = {
    // handleClickMenuItem: PropTypes.func.isRequired
// };

export default About;