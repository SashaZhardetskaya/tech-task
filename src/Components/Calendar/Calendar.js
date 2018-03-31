import React, {Component} from "react";
// import {Link} from "react-router-dom";
// import PropTypes from "prop-types";
import moment from 'moment';
import { DateRange } from 'react-date-range';



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
            <div>
                <h2>Calendar</h2>
                <div>
                    <input
                        type='text'
                        readOnly
                        value={ rangePicker['startDate'] ? rangePicker['startDate'].format(format).toString() : moment()}
                    />
                    <input
                        type='text'
                        readOnly
                        value={ rangePicker['endDate'] ? rangePicker['endDate'].format(format).toString() : moment()}
                    />
                    <input
                        type='text'
                        readOnly
                        value={ this.state.dayDifference }
                    />
                </div>
                <DateRange
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                />
            </div>
        );
    }
}


export default Calendar;