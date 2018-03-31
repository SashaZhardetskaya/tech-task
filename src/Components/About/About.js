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

    state = {
        currentOpenAccIndex: []
    };

    //Actions
    handleActiveOpenAcc = (index) => {
        const currentIndex = this.state.currentOpenAccIndex;
        this.setState({
            currentOpenAccIndex:
                currentIndex.indexOf(index) > -1
                    ? currentIndex.filter(i => i !== index)
                    : [...currentIndex, index]
        })
    };

    //Renders

    renderListContent = (index) => {
        switch (index) {
            case 0:
                return (
                    <div>000000--------------</div>
                );
            case 1:
                return (
                    <div>111111--------------</div>
                );
            case 2:
                return (
                    <div>22222--------------</div>
                );
            case 3:
                return (
                    <div>3333333---------------</div>
                );
            default:
                return null;
        }
    };

    render() {
        return (
            <div>
                <h2>Ameen Merchant App</h2>
                <ul
                    // className={}
                >
                    {
                        listContent.map((item, index) => {
                            return (
                                <li key={'sdfgh__'+index}>
                                    <div
                                        onClick={() => this.handleActiveOpenAcc(index)}
                                    >
                                        <div
                                            style={{backgroundColor: item.color}}
                                        >
                                            <img src={item.image} alt={item.text}/>
                                        </div>
                                        <p>{item.text}</p>
                                        <i>sdcsd</i>
                                    </div>
                                    <SlideDown className='my-dropdown-slidedown'>
                                        {this.state.currentOpenAccIndex.indexOf(index) > -1 && this.renderListContent(index)}
                                        {/*{console.log('this.state.currentOpenAccIndex.indexOf(index)', this.state.currentOpenAccIndex)}*/}
                                    </SlideDown>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }

}

// Sidebar.propTypes = {
    // handleClickMenuItem: PropTypes.func.isRequired
// };

export default About;