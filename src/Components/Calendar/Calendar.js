import React, {Component} from 'react';
import moment from 'moment';
import { DateRange } from 'react-date-range';

import './Calendar.scss'

const calendarTheme = {
    DateRange      : {
        background   : 'transparent'
    },
    Calendar       : {
        background   : '#ffffff',
        color        : '#363a47',
        marginRight  : '10px',
    },
    MonthAndYear   : {
        fontSize     : '20px',
        color        : '#222634',
        fontWeight   : '300'
    },
    MonthButton    : {
        background   : 'transparent'
    },
    Weekday        : {
        background   : '#F6F8FA',
        color        : '#222634',
        fontSize     : '14px',
        lineHeight   : '32px',
        height       : '31px',
        fontWeight   : '300'
    },
    Day            : {
        fontSize     : '16px',
        fontWeight   : '300',
        color        : '#363a47b3',
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
        color        : '#363a47',
    },
    DayHover       : {
        background   : '#1066D8',
        borderRadius : '5px',
        boxShadow    : '0 2px 4px rgba(0, 0, 0, 0.1)'
    }
};

class Calendar extends Component {

    state = {
        rangePicker : {},
        dayDifference : 0
    };

    //Actions
    handleSelect = (range) => {
        let diffMs = moment(range.endDate).diff(moment(range.startDate));
        let diffDays = Math.floor(moment.duration(diffMs).asDays())+1;
        this.setState({
            rangePicker : range,
            dayDifference : diffDays
        });
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
                    <div className='calendar-input calendar-input__date'>
                        <div className='sign'>
                            Departure
                        </div>
                        <input
                            type='text'
                            readOnly
                            value={ rangePicker['startDate'] ? rangePicker['startDate'].format(format).toString() : moment()}
                        />
                    </div>
                    <div className='calendar-input calendar-input__date'>
                        <div className='sign'>
                            Arriving
                        </div>
                        <input
                            type='text'
                            readOnly
                            value={ rangePicker['endDate'] ? rangePicker['endDate'].format(format).toString() : moment()}
                        />
                    </div>
                    <div className='calendar-input calendar-input__day'>
                        <div className='sign'>
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
                    theme={calendarTheme}
                />
            </div>
        );
    }
}


export default Calendar;