import React, {Component} from "react";
// import {Link} from "react-router-dom";
// import PropTypes from "prop-types";
import moment from 'moment';
import { DateRange } from 'react-date-range';

import './Calendar.scss'


class Calendar extends Component {

    state = {
        rangePicker : {},
        dayDifference : 0
        // currentOpenAccIndex: []
    };

    //Actions
    handleSelect = (range) => {
        console.log(range);
        console.log(range.startDate._d);
        console.log(moment());

        let diffMs = moment(range.endDate).diff(moment(range.startDate));
        let diffDays = Math.floor(moment.duration(diffMs).asDays())+1;

        this.setState({
            rangePicker : range,
            dayDifference : diffDays
        });
        // console.log(moment().format(range.startDate));
        // An object with two keys,
        // 'startDate' and 'endDate' which are Momentjs objects.
    };

    //Renders

    render() {
        const {
            rangePicker
        } = this.state;
        const format = 'DD/MM/YY';
        return (
            <div className='content-wrapper'>
                <h2 className='main-title'>
                    Calendar
                </h2>
                <div className='calendar-input__wrapper'>
                    <div className="calendar-input calendar-input__date">
                        <div className="sign">
                            Departure
                        </div>
                        <input
                            type='text'
                            readOnly
                            value={ rangePicker['startDate'] ? rangePicker['startDate'].format(format).toString() : moment()}
                        />
                    </div>
                    <div className="calendar-input calendar-input__date">
                        <div className="sign">
                            Arriving
                        </div>
                        <input
                            type='text'
                            readOnly
                            value={ rangePicker['endDate'] ? rangePicker['endDate'].format(format).toString() : moment()}
                        />
                    </div>
                    <div className="calendar-input calendar-input__day">
                        <div className="sign">
                            Days
                        </div>
                        <input
                            type='text'
                            readOnly
                            value={ this.state.dayDifference }
                        />
                    </div>
                </div>
                <DateRange
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                    theme={{
                        DateRange      : {
                            background   : 'transparent'
                        },
                        Calendar       : {
                            background   : '#ffffff',
                            color        : '#363a47',
                            marginRight: '10px',
                        },
                        MonthAndYear   : {
                            // background   : '#e74c3c',
                            fontSize     : '20px',
                            color        : '#222634',
                            fontWeight   : '300'
                        },
                        MonthButton    : {
                            background   : 'transparent'
                        },
                        // MonthArrowPrev : {
                        //     borderRightColor : '#d96659',
                        // },
                        // MonthArrowNext : {
                        //     borderLeftColor : '#d96659',
                        // },
                        Weekday        : {
                            background   : '#F6F8FA',
                            color        : '#222634',
                            fontSize     : '14px',
                            lineHeight: '32px',
                            height: '31px',
                            fontWeight: '300'
                        },
                        Day            : {
                            fontSize: '16px',
                            fontWeight: '300',
                            color: '#363a47b3',
                            transition   : 'transform .1s ease, box-shadow .1s ease, background .1s ease'
                        },
                        DaySelected    : {
                            background   : '#1066D8',
                            borderRadius : '5px',
                        },
                        DayActive    : {
                            background   : '#1066D8',
                            boxShadow    : 'none',
                            borderRadius : '5px',
                        },
                        DayInRange     : {
                            background   : '#eaf2fc',
                            // opacity: 0.1,
                            color        : '#363a47',
                        },
                        DayHover       : {
                            background   : '#1066D8',
                            borderRadius : '5px',
                            // color        : '#7f8c8d',
                            // transform    : 'scale(1.1) translateY(-10%)',
                            boxShadow    : '0 2px 4px rgba(0, 0, 0, 0.1)'
                        }
                    }}
                />
            </div>
        );
    }
}


export default Calendar;