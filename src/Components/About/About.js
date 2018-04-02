import React, {Component} from "react";
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import ico1 from "../../Images/readme/ico1.svg";
import ico2 from "../../Images/readme/ico2.svg";
import ico3 from "../../Images/readme/ico3.svg";
import ico4 from "../../Images/readme/ico4.svg";
import arrowDown from "../../Images/commons/arrow_icon.svg";
import './About.scss'

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
        text: 'Used Technologies'
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
                    <div className='about__open-card'>
                        <ul>
                            <li>
                                <strong>Step 1:</strong>
                                git clone <a href="https://github.com/SashaZhardetskaya/tech-task">this</a> repo
                            </li>
                            <li>
                                <strong>Step 2:</strong>
                                cd to the cloned repo
                            </li>
                            <li>
                                <strong>Step 3:</strong>
                                Install the Application with
                                <code> yarn | npm i</code>
                            </li>
                        </ul>
                    </div>
                );
            case 1:
                return (
                    <div className='about__open-card'>
                        Run the Application with
                        <code> yarn start | npm start</code>
                    </div>
                );
            case 2:
                return (
                    <div className='about__open-card'>
                        <ul>
                            <li>
                                <strong>1:</strong>
                                <a href="https://www.npmjs.com/package/create-react-app">Create-React-App</a>
                            </li>
                            <li>
                                <strong>2:</strong>
                                <a href="https://reactjs.org/">React 16</a>
                            </li>
                            <li>
                                <strong>3:</strong>
                                <a href="https://www.npmjs.com/package/react-router-dom">react-router 4</a>
                            </li>
                            <li>
                                <strong>4:</strong>
                                <a href="http://adphorus.github.io/react-date-range/">react-date-range</a>
                            </li>
                            <li>
                                <strong>5:</strong>
                                Plugin for animations
                                <a href="https://www.npmjs.com/package/react-slidedown"> react-slidedown</a>
                            </li>
                            <li>
                                <strong>6:</strong>
                                <a href="https://webpack.js.org/">Webpack</a>
                            </li>
                            <li>
                                <strong>7:</strong>
                                <a href="https://sass-scss.ru/">SASS (SCSS)</a>
                            </li>
                        </ul>
                    </div>
                );
            case 3:
                return (
                    <div className='about__open-card'>
                        This project available on gh pages via <a href="">link</a>
                    </div>
                );
            default:
                return null;
        }
    };

    render() {
        return (
            <div className='content-wrapper'>
                <h2 className='main-title'>
                    Ameen Merchant App
                </h2>
                <ul className='about__list'>
                    {
                        listContent.map((item, index) => {
                            return (
                                <li
                                    key={item.text}
                                    className={`about__card ${this.state.currentOpenAccIndex.indexOf(index) > -1 && 'open'}`}
                                >
                                    <div
                                        className='about__collapsed-card'
                                        onClick={() => this.handleActiveOpenAcc(index)}
                                    >
                                        <div
                                            className='about__icon'
                                            style={{backgroundColor: item.color}}
                                        >
                                            <img src={item.image} alt={item.text}/>
                                        </div>
                                        <p>{item.text}</p>
                                        <img
                                            className={`arrow-icon ${this.state.currentOpenAccIndex.indexOf(index) > -1 && 'open'}`}
                                            src={arrowDown}
                                            alt="arrow"
                                        />
                                    </div>
                                    <SlideDown className='my-dropdown-slidedown'>
                                        {this.state.currentOpenAccIndex.indexOf(index) > -1 && this.renderListContent(index)}
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

export default About;